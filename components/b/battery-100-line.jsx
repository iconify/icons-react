import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qt4hqvhwm.css';
import '../../css/d/d9ofjtyju.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="qt4hqvhwm"/><path class="d9ofjtyju"/></g>`,
		"fallback": "marketeq:battery-100-line",
	});
}

export default Component;
