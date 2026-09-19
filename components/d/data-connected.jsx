import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc8783bec.css';
import '../../css/q/qmao7mx0z.css';
import '../../css/q/qjaiieb6v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc8783bec"/><path class="qmao7mx0z"/><path class="qjaiieb6v"/>`,
		"fallback": "carbon:data-connected",
	});
}

export default Component;
