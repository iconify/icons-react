import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmiqepbty.css';
import '../../css/j/j7xllpb6d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmiqepbty"/><path class="j7xllpb6d"/>`,
		"fallback": "carbon:ibm-cloud-direct-link-2-dedicated",
	});
}

export default Component;
