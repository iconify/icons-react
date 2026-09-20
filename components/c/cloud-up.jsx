import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzfl7tecj.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzfl7tecj"/>`,
		"fallback": "wi:cloud-up",
	});
}

export default Component;
