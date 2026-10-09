import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffnzzok4k.css';
import '../../css/o/obwdsybdp.css';
import '../../css/l/lrafj40nd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffnzzok4k"/><path class="obwdsybdp"/><path class="lrafj40nd"/>`,
		"fallback": "energy-icons:home-20-bold",
	});
}

export default Component;
