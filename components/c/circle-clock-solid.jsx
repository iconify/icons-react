import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1wpx7blc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t1wpx7blc"/>`,
		"fallback": "streamline:circle-clock-solid",
	});
}

export default Component;
