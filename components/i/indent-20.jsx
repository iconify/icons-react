import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1tcy5bjg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1tcy5bjg"/>`,
		"fallback": "energy-icons:indent-20",
	});
}

export default Component;
