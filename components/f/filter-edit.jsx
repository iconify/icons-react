import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orw8s647j.css';
import '../../css/f/fwvo6n8hv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orw8s647j"/><path class="fwvo6n8hv"/>`,
		"fallback": "carbon:filter-edit",
	});
}

export default Component;
