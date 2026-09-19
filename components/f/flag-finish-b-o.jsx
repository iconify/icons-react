import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dszoyk3rx.css';
import '../../css/o/oc7q_ob4j.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dszoyk3rx"/><path class="oc7q_ob4j"/>`,
		"fallback": "gis:flag-finish-b-o",
	});
}

export default Component;
