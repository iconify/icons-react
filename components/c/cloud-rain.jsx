import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5xnp4tqf.css';
import '../../css/h/hs54bjbuo.css';
import '../../css/u/u79yq9b4p.css';
import '../../css/d/dh0ml9jui.css';
import '../../css/b/blxaq41pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l5xnp4tqf"/><path class="hs54bjbuo"/><path class="u79yq9b4p"/><path class="dh0ml9jui"/><path class="blxaq41pa"/></g>`,
		"fallback": "streamline-cyber-color:cloud-rain",
	});
}

export default Component;
