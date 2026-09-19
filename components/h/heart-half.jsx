import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo7k8ptgw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo7k8ptgw"/>`,
		"fallback": "bi:heart-half",
	});
}

export default Component;
