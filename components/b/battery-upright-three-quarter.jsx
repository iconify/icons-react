import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po7yq0b0q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="po7yq0b0q"/>`,
		"fallback": "ix:battery-upright-three-quarter",
	});
}

export default Component;
