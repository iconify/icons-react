import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkca6ac2f.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkca6ac2f"/>`,
		"fallback": "el:cog-alt",
	});
}

export default Component;
