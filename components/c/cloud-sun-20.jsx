import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9w0q_b5k.css';
import '../../css/n/nc1vrqo3v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9w0q_b5k"/><path class="nc1vrqo3v"/>`,
		"fallback": "energy-icons:cloud-sun-20",
	});
}

export default Component;
