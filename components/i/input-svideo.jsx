import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvjg4ul6n.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvjg4ul6n"/>`,
		"fallback": "zmdi:input-svideo",
	});
}

export default Component;
