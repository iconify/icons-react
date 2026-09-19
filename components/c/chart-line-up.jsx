import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azu9p9b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="azu9p9b0k"/>`,
		"fallback": "griddy-icons:chart-line-up",
	});
}

export default Component;
