import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8-s3s_ge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8-s3s_ge"/>`,
		"fallback": "iconamoon:compare-thin",
	});
}

export default Component;
