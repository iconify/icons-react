import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adl5jsb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adl5jsb0d"/>`,
		"fallback": "keyline-icons:grid-squares-check-sharp",
	});
}

export default Component;
