import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjtcl1bev.css';
import '../../css/a/a7u6cyhmr.css';
import '../../css/b/b5w0wtb3k.css';
import '../../css/s/s-x7mwb-w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjtcl1bev"/><path class="a7u6cyhmr"/><path class="b5w0wtb3k"/><path class="s-x7mwb-w"/>`,
		"fallback": "energy-icons:growth-20-bold",
	});
}

export default Component;
