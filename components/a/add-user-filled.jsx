import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3obo9bul.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3obo9bul"/>`,
		"fallback": "ix:add-user-filled",
	});
}

export default Component;
