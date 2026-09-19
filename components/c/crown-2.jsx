import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z8rrb3blu.css';
import '../../css/v/v3lazdikl.css';
import '../../css/q/qt3p9gqnz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z8rrb3blu"/><path class="v3lazdikl"/><path class="qt3p9gqnz"/></g>`,
		"fallback": "glyphs:crown-2",
	});
}

export default Component;
