import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/who-b3bnz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="who-b3bnz"/>`,
		"fallback": "streamline:industry-innovation-and-infrastructure-remix",
	});
}

export default Component;
