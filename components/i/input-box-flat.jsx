import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xgz-o3gwr.css';
import '../../css/s/si_43y_3z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xgz-o3gwr"/><path class="si_43y_3z"/></g>`,
		"fallback": "streamline-flex-color:input-box-flat",
	});
}

export default Component;
