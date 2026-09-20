import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jarezk6na.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jarezk6na"/>`,
		"fallback": "solar:end-call-rounded-broken",
	});
}

export default Component;
