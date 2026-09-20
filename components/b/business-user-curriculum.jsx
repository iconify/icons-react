import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/l/l7zjl-bdf.css';
import '../../css/y/yq8kh-3si.css';
import '../../css/k/khoc-wt5s.css';
import '../../css/m/m3mjobbnn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="l7zjl-bdf"/><path class="yq8kh-3si"/><path class="khoc-wt5s"/><path class="m3mjobbnn"/></g>`,
		"fallback": "streamline:business-user-curriculum",
	});
}

export default Component;
