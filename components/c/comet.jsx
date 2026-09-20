import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fkwx7mb3t.css';
import '../../css/z/z_q7k7brc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fkwx7mb3t"/><path class="z_q7k7brc"/></g>`,
		"fallback": "streamline:comet",
	});
}

export default Component;
