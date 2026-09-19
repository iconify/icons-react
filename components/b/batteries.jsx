import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt6oaq06m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt6oaq06m"/>`,
		"fallback": "game-icons:batteries",
	});
}

export default Component;
