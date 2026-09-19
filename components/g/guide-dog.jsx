import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2v2x5blb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2v2x5blb"/>`,
		"fallback": "healthicons:guide-dog",
	});
}

export default Component;
