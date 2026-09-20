import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt0rs9b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt0rs9b0p"/>`,
		"fallback": "tabler:car-4wd",
	});
}

export default Component;
