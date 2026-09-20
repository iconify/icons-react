import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmg4esbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rmg4esbwv"/>`,
		"fallback": "reicon:forward-right",
	});
}

export default Component;
