import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chji1lpeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chji1lpeh"/>`,
		"fallback": "keyline-icons:banknote-2-plus-sharp",
	});
}

export default Component;
