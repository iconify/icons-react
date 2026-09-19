import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arszanvyc.css';
import '../../css/f/f3jhhqbha.css';
import '../../css/d/dko573bkm.css';
import '../../css/s/s8lloenzi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="arszanvyc"/><path class="f3jhhqbha"/><path class="dko573bkm"/><path class="s8lloenzi"/></g>`,
		"fallback": "glyphs:dice-duo",
	});
}

export default Component;
