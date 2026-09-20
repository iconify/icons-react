import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/ty3po4buc.css';
import '../../css/q/qfoido-8q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ty3po4buc"/><path class="qfoido-8q"/></g>`,
		"fallback": "streamline:ai-cloud-spark",
	});
}

export default Component;
