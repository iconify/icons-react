import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gghdvqo-j.css';
import '../../css/h/h1dauy4rw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gghdvqo-j"/><path class="h1dauy4rw"/>`,
		"fallback": "energy-icons:environmental-impact-20-bold",
	});
}

export default Component;
