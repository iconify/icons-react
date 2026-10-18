import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuvdc2bma.css';
import '../../css/v/vx4dvjb5g.css';
import '../../css/k/kx-78fb7k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuvdc2bma"/><path class="vx4dvjb5g"/><path class="kx-78fb7k"/>`,
		"fallback": "energy-icons:green-bond-48",
	});
}

export default Component;
