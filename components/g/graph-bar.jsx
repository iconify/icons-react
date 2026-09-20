import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqm39aclf.css';
import '../../css/t/tzb51cxjt.css';
import '../../css/e/epfj3sb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqm39aclf"/><path class="tzb51cxjt"/><path class="epfj3sb4v"/>`,
		"fallback": "uim:graph-bar",
	});
}

export default Component;
