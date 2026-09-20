import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7w-z6qcd.css';
import '../../css/b/bvan9ac7d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g7w-z6qcd"/><path class="bvan9ac7d"/></g>`,
		"fallback": "quill:cog",
	});
}

export default Component;
