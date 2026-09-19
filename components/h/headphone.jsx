import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psd8k6b7l.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psd8k6b7l"/>`,
		"fallback": "dinkie-icons:headphone",
	});
}

export default Component;
