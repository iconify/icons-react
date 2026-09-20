import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxij0i_mn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxij0i_mn"/>`,
		"fallback": "pinhead:barn-and-silo",
	});
}

export default Component;
