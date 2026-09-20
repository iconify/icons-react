import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbr1m2bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbr1m2bpj"/>`,
		"fallback": "thesvg:css-modules",
	});
}

export default Component;
