import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vomp9sbel.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vomp9sbel"/>`,
		"fallback": "ix:connector",
	});
}

export default Component;
