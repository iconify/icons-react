import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umame36qe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umame36qe"/>`,
		"fallback": "icomoon-free:enlarge",
	});
}

export default Component;
