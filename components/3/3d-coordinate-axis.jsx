import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/dbuvyfbjz.css';
import '../../css/b/b34vnnp7g.css';
import '../../css/f/fjgi-8bae.css';
import '../../css/p/pv71rbcok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="dbuvyfbjz"/><path class="b34vnnp7g"/><path class="fjgi-8bae"/><path class="pv71rbcok"/></g>`,
		"fallback": "streamline-plump-color:3d-coordinate-axis",
	});
}

export default Component;
