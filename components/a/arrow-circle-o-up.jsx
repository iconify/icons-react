import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-922rvxz.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-922rvxz"/>`,
		"fallback": "fa:arrow-circle-o-up",
	});
}

export default Component;
