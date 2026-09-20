import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx2t-v_0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rx2t-v_0o"/>`,
		"fallback": "keyline-icons:circle-bar-chart-horizontal-end-sharp-fill",
	});
}

export default Component;
