import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ju8wffb6x.css';
import '../../css/g/glo90ubma.css';
import '../../css/a/aenh_rbaj.css';
import '../../css/m/mz4b9yb_q.css';
import '../../css/y/y2msac22r.css';
import '../../css/u/uw8kmhmut.css';
import '../../css/e/er43fri6u.css';
import '../../css/r/r3rek1yif.css';
import '../../css/o/owze51b3c.css';
import '../../css/i/ia5evobay.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ju8wffb6x"/><path class="glo90ubma"/><path class="aenh_rbaj"/><path class="mz4b9yb_q"/><path clip-rule="evenodd" class="y2msac22r"/><path clip-rule="evenodd" class="uw8kmhmut"/><path class="er43fri6u"/><path class="r3rek1yif"/><path clip-rule="evenodd" class="owze51b3c"/><path class="ia5evobay"/></g>`,
		"fallback": "fluent-emoji-flat:chequered-flag",
	});
}

export default Component;
