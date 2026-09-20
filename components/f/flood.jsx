import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w01qysb_c.css';
import '../../css/c/c2wp6ritf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w01qysb_c"/><path class="c2wp6ritf"/>`,
		"fallback": "selfhst:flood",
	});
}

export default Component;
