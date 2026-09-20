import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ridpunbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ridpunbbn"/>`,
		"fallback": "tdesign:arrow-up-down-1",
	});
}

export default Component;
