import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfpfexb1x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfpfexb1x"/>`,
		"fallback": "selfhst:drop",
	});
}

export default Component;
