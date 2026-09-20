import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-d3ovb7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-d3ovb7y"/>`,
		"fallback": "selfhst:hashicorp-terraform-dark",
	});
}

export default Component;
