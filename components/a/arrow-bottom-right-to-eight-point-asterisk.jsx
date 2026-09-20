import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btnwyabiy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btnwyabiy"/>`,
		"fallback": "pinhead:arrow-bottom-right-to-eight-point-asterisk",
	});
}

export default Component;
