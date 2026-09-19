import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iq9dzactc.css';
import '../../css/o/ohj00hbiv.css';
import '../../css/n/nrwtu07fj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iq9dzactc"/><path class="ohj00hbiv"/><path class="nrwtu07fj"/></g>`,
		"fallback": "glyphs:image-duo",
	});
}

export default Component;
