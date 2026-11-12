import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu2v_2bgt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu2v_2bgt"/>`,
		"fallback": "selfhst:composerize-dark",
	});
}

export default Component;
