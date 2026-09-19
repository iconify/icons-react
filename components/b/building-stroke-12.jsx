import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa-t1nyfw.css';
import '../../css/z/zjegb3bxf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa-t1nyfw"/><path class="zjegb3bxf"/>`,
		"fallback": "garden:building-stroke-12",
	});
}

export default Component;
