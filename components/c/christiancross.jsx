import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq2a-_k6c.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq2a-_k6c"/>`,
		"fallback": "whh:christiancross",
	});
}

export default Component;
