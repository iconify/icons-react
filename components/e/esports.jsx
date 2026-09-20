import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nket4pbvf.css';
import '../../css/u/udcg3j56n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nket4pbvf"/><path class="udcg3j56n"/></g>`,
		"fallback": "streamline:esports",
	});
}

export default Component;
