import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h17nzhblp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h17nzhblp"/>`,
		"fallback": "devicon-plain:dovecot",
	});
}

export default Component;
