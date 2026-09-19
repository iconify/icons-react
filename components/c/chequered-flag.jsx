import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y2eyrqbak.css';
import '../../css/v/vxmirybyg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y2eyrqbak"/><path class="vxmirybyg"/></g>`,
		"fallback": "fluent-emoji-high-contrast:chequered-flag",
	});
}

export default Component;
