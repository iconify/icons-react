import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a932zqezp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a932zqezp"/>`,
		"fallback": "keyline-icons:bar-chart-2-down-sharp",
	});
}

export default Component;
