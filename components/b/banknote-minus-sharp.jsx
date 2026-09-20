import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo8tknqau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo8tknqau"/>`,
		"fallback": "keyline-icons:banknote-minus-sharp",
	});
}

export default Component;
