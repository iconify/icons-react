import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kimfu9q5t.css';
import '../../css/o/ow_xmxbad.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kimfu9q5t"/><path class="ow_xmxbad"/>`,
		"fallback": "energy-icons:file-question-20",
	});
}

export default Component;
