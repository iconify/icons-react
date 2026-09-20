import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lphsuacmh.css';
import '../../css/r/rnzvp8utw.css';
import '../../css/g/giwddbb8h.css';
import '../../css/g/gutzmv4pb.css';
import '../../css/b/bl4v4lb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lphsuacmh"/><path class="rnzvp8utw"/><path class="giwddbb8h"/><path class="gutzmv4pb"/><path class="bl4v4lb1s"/></g>`,
		"fallback": "streamline-cyber-color:guitar",
	});
}

export default Component;
