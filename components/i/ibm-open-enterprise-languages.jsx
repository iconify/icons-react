import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxlye1b8h.css';
import '../../css/o/o8elwl8sg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxlye1b8h"/><path class="o8elwl8sg"/>`,
		"fallback": "carbon:ibm-open-enterprise-languages",
	});
}

export default Component;
