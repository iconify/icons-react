import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfzxfn1ox.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfzxfn1ox"/>`,
		"fallback": "dinkie-icons:input-latin-lower-letters-filled",
	});
}

export default Component;
