import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hec1o9hrf.css';
import '../../css/a/ablh-jbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hec1o9hrf"/><path class="ablh-jbqo"/>`,
		"fallback": "gcp:cloud-run-for-anthos",
	});
}

export default Component;
