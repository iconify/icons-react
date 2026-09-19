import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgaut19ei.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgaut19ei"/>`,
		"fallback": "f7:envelope-open",
	});
}

export default Component;
