import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt5zfkb5n.css';
import '../../css/k/kx34z-i_j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt5zfkb5n"/><path class="kx34z-i_j"/>`,
		"fallback": "energy-icons:heat-battery-20",
	});
}

export default Component;
