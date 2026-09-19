import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p517mpiuc.css';

const viewBox = {"width":1728,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p517mpiuc"/>`,
		"fallback": "fa:flag",
	});
}

export default Component;
