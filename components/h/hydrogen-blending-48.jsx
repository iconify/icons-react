import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8nc87u9j.css';
import '../../css/w/w7okmzx7d.css';
import '../../css/k/kxc6azbrd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8nc87u9j"/><path class="w7okmzx7d"/><path class="kxc6azbrd"/>`,
		"fallback": "energy-icons:hydrogen-blending-48",
	});
}

export default Component;
