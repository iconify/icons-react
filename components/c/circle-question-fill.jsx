import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzml2dbmo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qzml2dbmo"/>`,
		"fallback": "gravity-ui:circle-question-fill",
	});
}

export default Component;
