import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq9zt8b7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq9zt8b7w"/>`,
		"fallback": "ix:control-io-field",
	});
}

export default Component;
