import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weytb4irw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weytb4irw"/>`,
		"fallback": "cib:amazon-aws",
	});
}

export default Component;
