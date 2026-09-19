import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk2ugrbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk2ugrbdk"/>`,
		"fallback": "ci:close-small",
	});
}

export default Component;
