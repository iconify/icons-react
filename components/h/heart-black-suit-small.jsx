import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgya-abtz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgya-abtz"/>`,
		"fallback": "dinkie-icons:heart-black-suit-small",
	});
}

export default Component;
