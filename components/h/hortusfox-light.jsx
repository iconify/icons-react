import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pujnj695n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pujnj695n"/>`,
		"fallback": "selfhst:hortusfox-light",
	});
}

export default Component;
