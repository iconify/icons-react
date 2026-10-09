import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r81g9n6kk.css';
import '../../css/s/spi1l0bgy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r81g9n6kk"/><path class="spi1l0bgy"/>`,
		"fallback": "energy-icons:heat-pump-cylinder-20",
	});
}

export default Component;
