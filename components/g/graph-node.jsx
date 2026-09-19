import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncs1tuokk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ncs1tuokk"/>`,
		"fallback": "gravity-ui:graph-node",
	});
}

export default Component;
