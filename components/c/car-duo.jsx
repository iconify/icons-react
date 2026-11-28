import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6b1zb9kl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ij3vyybgh.css';
import '../../css/w/w3i1zx0jw.css';
import '../../css/m/ma7xnu3nv.css';
import '../../css/c/cvrov6oxr.css';
import '../../css/q/qv2hzgbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6b1zb9kl secondary"/><g class="dt0cm9dhy primary"><path class="ij3vyybgh"/><path class="w3i1zx0jw"/><path class="ma7xnu3nv"/><path class="cvrov6oxr"/><path class="qv2hzgbog"/></g>`,
		"fallback": "iconaut:car-duo",
	});
}

export default Component;
