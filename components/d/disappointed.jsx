import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/h/hutuskbuc.css';
import '../../css/n/n9cednr3v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="hutuskbuc"/><path class="n9cednr3v"/>`,
		"fallback": "fxemoji:disappointed",
	});
}

export default Component;
