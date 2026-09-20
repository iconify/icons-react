import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qc7xygk3p.css';
import '../../css/x/x4jphgd-i.css';
import '../../css/p/pxv43-brj.css';
import '../../css/i/itf3hmwyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qc7xygk3p"/><path class="x4jphgd-i"/><path class="pxv43-brj"/><path class="itf3hmwyz"/></g>`,
		"fallback": "streamline-ultimate:instagram-logo",
	});
}

export default Component;
