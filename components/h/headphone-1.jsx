import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if1fl5uuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="if1fl5uuo"/>`,
		"fallback": "lineicons:headphone-1",
	});
}

export default Component;
