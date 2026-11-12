import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhkel2bte.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhkel2bte"/>`,
		"fallback": "selfhst:dockerizalo-light",
	});
}

export default Component;
