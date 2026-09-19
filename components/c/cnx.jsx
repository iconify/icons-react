import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s3fvc1qen.css';
import '../../css/k/k5darrm3j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="s3fvc1qen"/><path class="k5darrm3j"/></g>`,
		"fallback": "cryptocurrency:cnx",
	});
}

export default Component;
