import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qks8owbib.css';
import '../../css/j/jhl5_6blw.css';
import '../../css/g/gnk_39b2m.css';
import '../../css/y/yy00_nzeo.css';
import '../../css/j/jwz1sobma.css';
import '../../css/l/l_zuc2git.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGtqaUweEC" x1="86.364" x2="86.364" y1="337.96" y2="7.121" gradientTransform="translate(-2.427 -1.8)scale(.37233)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qks8owbib"/><stop offset="1" class="jhl5_6blw"/></linearGradient><linearGradient id="SVGGXnOQZZS" x1="216.108" x2="216.108" y1="348.988" y2="7.277" gradientTransform="translate(-2.427 -1.8)scale(.37233)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qks8owbib"/><stop offset="1" class="jhl5_6blw"/></linearGradient></defs><path clip-rule="evenodd" class="gnk_39b2m"/><path clip-rule="evenodd" class="yy00_nzeo"/><path fill="url(#SVGtqaUweEC)" clip-rule="evenodd" class="jwz1sobma"/><path fill="url(#SVGGXnOQZZS)" clip-rule="evenodd" class="l_zuc2git"/>`,
		"fallback": "devicon:firebird",
	});
}

export default Component;
