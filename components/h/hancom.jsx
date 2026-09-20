import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxkiydbjh.css';

const viewBox = {"width":2555,"height":810};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxkiydbjh"/>`,
		"fallback": "thesvg-color:hancom",
	});
}

export default Component;
