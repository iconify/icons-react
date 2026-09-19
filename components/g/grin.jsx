import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/d/d2e0hniif.css';
import '../../css/o/on4mi1mmc.css';
import '../../css/j/jhaw5gzhp.css';
import '../../css/s/sor7622zl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am770-rkn"/><path clip-rule="evenodd" class="d2e0hniif"/><path class="on4mi1mmc"/><circle class="jhaw5gzhp"/><circle class="sor7622zl"/></g>`,
		"fallback": "glyphs-poly:grin",
	});
}

export default Component;
