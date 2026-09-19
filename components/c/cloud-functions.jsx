import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed1kf3bsk.css';
import '../../css/f/fu5u_g-tu.css';
import '../../css/u/u_1ueg2xx.css';
import '../../css/j/jwhxn2b3j.css';
import '../../css/t/tnggmccon.css';
import '../../css/r/rgv4g2crh.css';
import '../../css/x/xl32r7t8g.css';
import '../../css/x/xc3ygjcec.css';
import '../../css/w/wesqdmbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed1kf3bsk"/><path class="fu5u_g-tu"/><path class="u_1ueg2xx"/><path class="jwhxn2b3j"/><path class="tnggmccon"/><path class="rgv4g2crh"/><circle class="xl32r7t8g"/><circle class="xc3ygjcec"/><circle class="wesqdmbju"/>`,
		"fallback": "gcp:cloud-functions",
	});
}

export default Component;
