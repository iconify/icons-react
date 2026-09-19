import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1dmnpb4x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1dmnpb4x"/>`,
		"fallback": "famicons:analytics-sharp",
	});
}

export default Component;
