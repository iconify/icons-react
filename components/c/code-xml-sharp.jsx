import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sro2fub8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sro2fub8t"/>`,
		"fallback": "keyline-icons:code-xml-sharp",
	});
}

export default Component;
