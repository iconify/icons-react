import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds1hiib0s.css';
import '../../css/q/qth2s3b6m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds1hiib0s"/><path class="qth2s3b6m"/>`,
		"fallback": "carbon:document-subject",
	});
}

export default Component;
