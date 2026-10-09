import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn8593byb.css';
import '../../css/g/gdm6o-2_d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn8593byb"/><path class="gdm6o-2_d"/>`,
		"fallback": "energy-icons:hot-air-balloon-20",
	});
}

export default Component;
