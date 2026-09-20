import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/u/u3atvniwf.css';
import '../../css/k/kz5bt151v.css';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/yn6pobgao.css';
import '../../css/l/ljw-qgmxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGpghDMeGS" width="18" height="20" x="3" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="u3atvniwf"/><path class="kz5bt151v"/></mask><g class="pr52f_b5y"><path mask="url(#SVGpghDMeGS)" class="yn6pobgao"/><path class="ljw-qgmxc"/></g>`,
		"fallback": "lets-icons:chield-check",
	});
}

export default Component;
