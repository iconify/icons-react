import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyaez7yho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyaez7yho"/>`,
		"fallback": "ci:caret-left-sm",
	});
}

export default Component;
