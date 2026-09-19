import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay4scmbps.css';
import '../../css/f/fave5fbdz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay4scmbps"/><path class="fave5fbdz"/>`,
		"fallback": "carbon:ibm-private-path-services",
	});
}

export default Component;
