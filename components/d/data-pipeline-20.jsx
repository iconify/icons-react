import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiabuuwes.css';
import '../../css/h/hpxwjdbem.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiabuuwes"/><path class="hpxwjdbem"/>`,
		"fallback": "energy-icons:data-pipeline-20",
	});
}

export default Component;
