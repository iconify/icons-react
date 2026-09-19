import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxnh_641e.css';
import '../../css/t/tiggjjbxq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxnh_641e"/><path class="tiggjjbxq"/>`,
		"fallback": "carbon:ibm-db2-warehouse",
	});
}

export default Component;
