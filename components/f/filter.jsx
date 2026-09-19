import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9y8rv3iu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9y8rv3iu"/>`,
		"fallback": "icomoon-free:filter",
	});
}

export default Component;
