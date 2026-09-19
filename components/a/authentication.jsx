import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndnn6chdf.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndnn6chdf"/>`,
		"fallback": "whh:authentication",
	});
}

export default Component;
