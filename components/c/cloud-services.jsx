import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqnfqd2jd.css';
import '../../css/r/rpr4dyb7y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqnfqd2jd"/><path class="rpr4dyb7y"/>`,
		"fallback": "carbon:cloud-services",
	});
}

export default Component;
