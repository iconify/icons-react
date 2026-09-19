import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cks-37igm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cks-37igm"/>`,
		"fallback": "cib:fur-affinity",
	});
}

export default Component;
