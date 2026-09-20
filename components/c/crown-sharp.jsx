import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gskaorbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gskaorbpq"/>`,
		"fallback": "keyline-icons:crown-sharp",
	});
}

export default Component;
