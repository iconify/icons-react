import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvx6gqv2g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvx6gqv2g"/>`,
		"fallback": "selfhst:flatnotes-dark",
	});
}

export default Component;
