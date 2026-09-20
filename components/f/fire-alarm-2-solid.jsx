import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjnhr6ifg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rjnhr6ifg"/>`,
		"fallback": "streamline-flex:fire-alarm-2-solid",
	});
}

export default Component;
