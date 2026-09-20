import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdoh0m-2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pdoh0m-2e"/>`,
		"fallback": "reicon:color-tuning",
	});
}

export default Component;
