import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1dqxab_i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f1dqxab_i"/>`,
		"fallback": "streamline:bomb-remix",
	});
}

export default Component;
