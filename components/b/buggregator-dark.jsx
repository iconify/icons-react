import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m85i73_cc.css';
import '../../css/c/cj59wwj5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m85i73_cc"/><path class="cj59wwj5r"/>`,
		"fallback": "selfhst:buggregator-dark",
	});
}

export default Component;
