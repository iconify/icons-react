import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt8f-3eoh.css';
import '../../css/s/s9tollx4w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt8f-3eoh"/><path class="s9tollx4w"/>`,
		"fallback": "energy-icons:folder-heart-20-bold",
	});
}

export default Component;
