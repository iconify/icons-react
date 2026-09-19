import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqeas2b2i.css';
import '../../css/k/ks-k4jbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqeas2b2i"/><path class="ks-k4jbsk"/>`,
		"fallback": "fontisto:if-question-circle",
	});
}

export default Component;
