import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clfpmnbkh.css';
import '../../css/d/dag1i075l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clfpmnbkh"/><path class="dag1i075l"/>`,
		"fallback": "vaadin:file-add",
	});
}

export default Component;
