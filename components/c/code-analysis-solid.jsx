import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr1ukwbfe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zr1ukwbfe"/>`,
		"fallback": "streamline-flex:code-analysis-solid",
	});
}

export default Component;
