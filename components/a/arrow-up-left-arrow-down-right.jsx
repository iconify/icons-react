import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc02xp00d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc02xp00d"/>`,
		"fallback": "f7:arrow-up-left-arrow-down-right",
	});
}

export default Component;
