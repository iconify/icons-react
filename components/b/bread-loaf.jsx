import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xfno_gbzx.css';
import '../../css/y/ydsk9w9qq.css';
import '../../css/o/ofdn5uy4y.css';
import '../../css/n/nt_mv1bzt.css';
import '../../css/s/svabjzbny.css';
import '../../css/c/cpqd5i2cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xfno_gbzx"/><path class="ydsk9w9qq"/><path class="ofdn5uy4y"/><path class="nt_mv1bzt"/><path class="svabjzbny"/><path class="cpqd5i2cr"/></g>`,
		"fallback": "streamline-ultimate-color:bread-loaf",
	});
}

export default Component;
