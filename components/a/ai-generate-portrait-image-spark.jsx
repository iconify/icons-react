import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kjfhg4w3r.css';
import '../../css/e/e-97h3b4w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kjfhg4w3r"/><path class="e-97h3b4w"/></g>`,
		"fallback": "streamline-flex:ai-generate-portrait-image-spark",
	});
}

export default Component;
