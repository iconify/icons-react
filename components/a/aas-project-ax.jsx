import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt4uvwnpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt4uvwnpo"/>`,
		"fallback": "ix:aas-project-ax",
	});
}

export default Component;
