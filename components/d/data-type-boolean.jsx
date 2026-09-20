import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6m5k9q_i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6m5k9q_i"/>`,
		"fallback": "ix:data-type-boolean",
	});
}

export default Component;
