import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pidvdx4pz.css';
import '../../css/h/hn9wklkoh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pidvdx4pz"/><path class="hn9wklkoh"/>`,
		"fallback": "energy-icons:id-card-20",
	});
}

export default Component;
