import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brqvmbc5r.css';
import '../../css/f/fbs_2vnbi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brqvmbc5r"/><path class="fbs_2vnbi"/>`,
		"fallback": "energy-icons:coins-20",
	});
}

export default Component;
