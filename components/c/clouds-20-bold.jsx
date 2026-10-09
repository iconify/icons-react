import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze-vj538g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze-vj538g"/>`,
		"fallback": "energy-icons:clouds-20-bold",
	});
}

export default Component;
