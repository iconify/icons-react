import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waergt57a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waergt57a"/>`,
		"fallback": "tabler:dice-5-filled",
	});
}

export default Component;
