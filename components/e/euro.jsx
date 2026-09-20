import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bij7l3q8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bij7l3q8t"/>`,
		"fallback": "lucide:euro",
	});
}

export default Component;
