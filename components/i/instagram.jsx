import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hio0vubtf.css';
import '../../css/c/c1f2n0bse.css';
import '../../css/g/gp0egaclj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="hio0vubtf"/><path class="c1f2n0bse"/><circle class="gp0egaclj"/></g>`,
		"fallback": "codex:instagram",
	});
}

export default Component;
