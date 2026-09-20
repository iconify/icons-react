import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecf22k6ia.css';
import '../../css/k/ke0zg7b_d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecf22k6ia"/><path class="ke0zg7b_d"/>`,
		"fallback": "roentgen:betula-urban-tree-pot",
	});
}

export default Component;
