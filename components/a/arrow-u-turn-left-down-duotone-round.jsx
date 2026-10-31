import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8bof-icw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8bof-icw"/>`,
		"fallback": "coolicons:arrow-u-turn-left-down-duotone-round",
	});
}

export default Component;
