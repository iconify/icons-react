import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwbuhqa_g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwbuhqa_g"/>`,
		"fallback": "streamline:cloud-wifi",
	});
}

export default Component;
