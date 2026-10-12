import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/z/zg9pvrb4y.css';
import '../../css/c/c6azuibpb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="zg9pvrb4y"/><path class="c6azuibpb"/>`,
		"fallback": "energy-icons:arrow-circle-up-20",
	});
}

export default Component;
