import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy1kzqb5s.css';
import '../../css/b/bgsh7qxku.css';
import '../../css/k/k4oa-tklo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy1kzqb5s"/><path class="bgsh7qxku"/><path class="k4oa-tklo"/>`,
		"fallback": "flat-color-icons:entering-heaven-alive",
	});
}

export default Component;
