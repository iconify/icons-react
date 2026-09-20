import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgamo4zls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgamo4zls"/>`,
		"fallback": "thesvg:development-containers",
	});
}

export default Component;
