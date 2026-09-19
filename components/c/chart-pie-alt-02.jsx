import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2iukbb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m2iukbb3b"/>`,
		"fallback": "griddy-icons:chart-pie-alt-02",
	});
}

export default Component;
