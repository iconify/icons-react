import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sov856baf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sov856baf"/>`,
		"fallback": "eos-icons:abstract-incomplete",
	});
}

export default Component;
