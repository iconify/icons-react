import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmt3k8bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gmt3k8bda"/>`,
		"fallback": "reicon:headphones2",
	});
}

export default Component;
