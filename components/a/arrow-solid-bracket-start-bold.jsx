import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jpbfdi_1g.css';
import '../../css/x/xam5qux0f.css';
import '../../css/y/ye2-1wzko.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jpbfdi_1g"/><path clip-rule="evenodd" class="xam5qux0f"/><path class="ye2-1wzko"/></g>`,
		"fallback": "glyphs:arrow-solid-bracket-start-bold",
	});
}

export default Component;
