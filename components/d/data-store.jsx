import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v24ihwb5t.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v24ihwb5t"/>`,
		"fallback": "bpmn:data-store",
	});
}

export default Component;
