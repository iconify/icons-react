import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj65r2bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj65r2bip"/>`,
		"fallback": "uis:analysis",
	});
}

export default Component;
