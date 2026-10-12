import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzi4bo-8z.css';
import '../../css/a/a58tyvbex.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzi4bo-8z"/><path class="a58tyvbex"/>`,
		"fallback": "garden:image-stroke-20",
	});
}

export default Component;
