import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4vmcpb2c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4vmcpb2c"/>`,
		"fallback": "bi:heartbreak-fill",
	});
}

export default Component;
