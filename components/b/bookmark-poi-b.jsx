import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs5-h4f2q.css';
import '../../css/o/oc7q_ob4j.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs5-h4f2q"/><path class="oc7q_ob4j"/>`,
		"fallback": "gis:bookmark-poi-b",
	});
}

export default Component;
