import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkleevbel.css';
import '../../css/k/koobuxbzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkleevbel"/><path class="koobuxbzj"/>`,
		"fallback": "selfhst:feeds-fun-light",
	});
}

export default Component;
