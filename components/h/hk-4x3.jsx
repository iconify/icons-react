import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfmuwbcef.css';
import '../../css/w/wt4-8acnn.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfmuwbcef"/><path id="SVG5tfvBPpj" class="wt4-8acnn"/><use href="#SVG5tfvBPpj" transform="rotate(72 312.5 243.5)"/><use href="#SVG5tfvBPpj" transform="rotate(144 312.5 243.5)"/><use href="#SVG5tfvBPpj" transform="rotate(216 312.5 243.5)"/><use href="#SVG5tfvBPpj" transform="rotate(288 312.5 243.5)"/>`,
		"fallback": "flag:hk-4x3",
	});
}

export default Component;
