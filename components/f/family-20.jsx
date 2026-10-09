import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-03amqbv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-03amqbv"/>`,
		"fallback": "energy-icons:family-20",
	});
}

export default Component;
