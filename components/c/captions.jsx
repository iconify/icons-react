import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6-i2bxng.css';
import '../../css/f/fputbrbsv.css';
import '../../css/n/nvo8aqz7d.css';
import '../../css/e/es052n9to.css';
import '../../css/t/ti_47mvtt.css';
import '../../css/b/bb8r9ghec.css';
import '../../css/t/t4lacfa-n.css';
import '../../css/r/rz7u6viaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6-i2bxng wm-shadow"/><path class="fputbrbsv wm-k"/><path class="nvo8aqz7d wm-k"/><path class="es052n9to wm-k"/><path class="ti_47mvtt wm-k"/><path class="bb8r9ghec wm-k"/><path class="t4lacfa-n wm-shine"/><path class="rz7u6viaw wm-a"/>`,
		"fallback": "withicons-pastel:captions",
	});
}

export default Component;
