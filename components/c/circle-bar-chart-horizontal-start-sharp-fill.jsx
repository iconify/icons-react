import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo28neb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xo28neb8t"/>`,
		"fallback": "keyline-icons:circle-bar-chart-horizontal-start-sharp-fill",
	});
}

export default Component;
