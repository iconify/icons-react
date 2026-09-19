import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-sap6zpp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-sap6zpp"/>`,
		"fallback": "game-icons:bolt-bomb",
	});
}

export default Component;
