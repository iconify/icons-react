import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc95n_4_k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc95n_4_k"/>`,
		"fallback": "energy-icons:chevron-left-20",
	});
}

export default Component;
