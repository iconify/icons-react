import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8u2_nrqs.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8u2_nrqs"/>`,
		"fallback": "thesvg-color:guidenai",
	});
}

export default Component;
