import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfmfw0brh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfmfw0brh"/>`,
		"fallback": "qlementine-icons:call-end-16",
	});
}

export default Component;
