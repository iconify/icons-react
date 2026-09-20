import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/y/yq7arhh0q.css';
import '../../css/o/o101-2bhf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="yq7arhh0q"/><path class="o101-2bhf"/></g>`,
		"fallback": "streamline-plump:airplane-disabled",
	});
}

export default Component;
