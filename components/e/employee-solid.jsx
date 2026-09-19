import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etq8ynb_q.css';
import '../../css/u/umdk-bb1p.css';
import '../../css/x/xycuzbc4v.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="etq8ynb_q"/><path class="umdk-bb1p"/><path class="xycuzbc4v"/>`,
		"fallback": "clarity:employee-solid",
	});
}

export default Component;
