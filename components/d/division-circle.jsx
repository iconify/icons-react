import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d-k3xxrtd.css';
import '../../css/e/ekradbbmu.css';
import '../../css/d/dzt4cgbwm.css';
import '../../css/w/wgajukbpj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="d-k3xxrtd"/><path class="ekradbbmu"/><path class="dzt4cgbwm"/><path class="wgajukbpj"/></g>`,
		"fallback": "streamline-plump-color:division-circle",
	});
}

export default Component;
