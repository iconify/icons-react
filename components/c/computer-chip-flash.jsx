import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opcag7b8w.css';
import '../../css/j/jgn5nx9dy.css';
import '../../css/k/kmtsabc7f.css';
import '../../css/h/hzxfrj4ik.css';
import '../../css/g/gj91bbajd.css';
import '../../css/o/ot1ql6btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="opcag7b8w"/><path class="jgn5nx9dy"/><path class="kmtsabc7f"/><path class="hzxfrj4ik"/><path class="gj91bbajd"/><path class="ot1ql6btj"/></g>`,
		"fallback": "streamline-ultimate-color:computer-chip-flash",
	});
}

export default Component;
