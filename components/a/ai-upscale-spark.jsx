import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o6jnn77sw.css';
import '../../css/p/pnw7xsb4u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o6jnn77sw"/><path class="pnw7xsb4u"/></g>`,
		"fallback": "streamline:ai-upscale-spark",
	});
}

export default Component;
