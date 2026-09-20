import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y892mo3mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y892mo3mv"/>`,
		"fallback": "keyline-icons:chart-pyramid-sharp",
	});
}

export default Component;
