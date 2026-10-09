import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f12oouk3n.css';
import '../../css/k/kl112gs4a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f12oouk3n"/><path class="kl112gs4a"/>`,
		"fallback": "energy-icons:carabiner-20-bold",
	});
}

export default Component;
