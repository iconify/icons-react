import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qxthw45-m.css';
import '../../css/t/thtvr2bpj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="qxthw45-m"/><path class="thtvr2bpj"/></g>`,
		"fallback": "streamline-plump-color:controller-1",
	});
}

export default Component;
