import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul96qtblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul96qtblw"/>`,
		"fallback": "tabler:canary",
	});
}

export default Component;
