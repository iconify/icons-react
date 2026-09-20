import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q__ikjbpe.css';
import '../../css/u/u53z4igoa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q__ikjbpe"/><path class="u53z4igoa"/>`,
		"fallback": "selfhst:google-voice",
	});
}

export default Component;
