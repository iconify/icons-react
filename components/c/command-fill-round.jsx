import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q48-8fbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q48-8fbsc"/>`,
		"fallback": "coolicons:command-fill-round",
	});
}

export default Component;
