import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-fuy4o1i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-fuy4o1i"/>`,
		"fallback": "streamline-flex:hierarchy-13",
	});
}

export default Component;
