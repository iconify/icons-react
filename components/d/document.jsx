import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prhz_2bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prhz_2bbj"/>`,
		"fallback": "heroicons-outline:document",
	});
}

export default Component;
