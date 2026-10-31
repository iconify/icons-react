import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/n99u5-bno.css';
import '../../css/i/i7eg65b6e.css';
import '../../css/u/ujn-f1vfa.css';
import '../../css/o/ojz0drb0s.css';
import '../../css/u/uooj9_soa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="n99u5-bno"/><path class="i7eg65b6e wm-shine"/><path class="ujn-f1vfa wm-k"/><path class="ojz0drb0s wm-a"/><path class="uooj9_soa wm-deco"/></g>`,
		"fallback": "withicons-kawaii:candy-bucket",
	});
}

export default Component;
