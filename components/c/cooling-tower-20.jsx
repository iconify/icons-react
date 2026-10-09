import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8xms1bet.css';
import '../../css/w/wius6xb7f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8xms1bet"/><path class="wius6xb7f"/>`,
		"fallback": "energy-icons:cooling-tower-20",
	});
}

export default Component;
