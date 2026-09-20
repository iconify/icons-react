import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbqbt435i.css';
import '../../css/v/v1w24bcca.css';
import '../../css/c/cn8nznbsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbqbt435i"/><path class="v1w24bcca"/><path class="cn8nznbsb"/>`,
		"fallback": "selfhst:comentario",
	});
}

export default Component;
