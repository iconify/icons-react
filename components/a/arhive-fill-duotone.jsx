import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isei8jc5c.css';
import '../../css/x/x6uxd8bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isei8jc5c"/><rect class="x6uxd8bue"/>`,
		"fallback": "lets-icons:arhive-fill-duotone",
	});
}

export default Component;
