import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gp0egaclj.css';
import '../../css/x/xv25iejfn.css';
import '../../css/l/l606hpblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="gp0egaclj"/><path class="xv25iejfn"/><circle class="l606hpblz"/></g>`,
		"fallback": "tdesign:center-focus-strong",
	});
}

export default Component;
