import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh32webdh.css';
import '../../css/p/prmgady3q.css';
import '../../css/r/r02kymx9f.css';
import '../../css/h/hjkb41mre.css';
import '../../css/u/u2p6nrbtg.css';
import '../../css/e/e3pu71beu.css';
import '../../css/u/uxj9urb3h.css';
import '../../css/o/ovdhkabkh.css';
import '../../css/f/f_do21mmo.css';
import '../../css/a/argwmccnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh32webdh wm-shadow"/><path class="prmgady3q wm-k"/><path class="r02kymx9f wm-k"/><path class="hjkb41mre wm-k"/><path class="u2p6nrbtg wm-k"/><path class="e3pu71beu wm-shine"/><path class="uxj9urb3h wm-a"/><path class="ovdhkabkh wm-a"/><path class="f_do21mmo wm-a"/><path class="argwmccnv wm-a"/>`,
		"fallback": "withicons-pastel:crosshair",
	});
}

export default Component;
