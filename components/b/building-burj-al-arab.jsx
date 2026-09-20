import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgnivh30g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgnivh30g"/>`,
		"fallback": "tabler:building-burj-al-arab",
	});
}

export default Component;
