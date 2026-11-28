import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqx9jqbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary rqx9jqbry"/>`,
		"fallback": "iconaut:health-cross-duotone",
	});
}

export default Component;
