import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9q25gbqs.css';

const viewBox = {"width":960,"height":959};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9q25gbqs"/>`,
		"fallback": "whh:dieone",
	});
}

export default Component;
