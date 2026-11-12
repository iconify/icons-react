import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b103epbdu.css';
import '../../css/w/wre6mlbjq.css';
import '../../css/c/cz6z9n00t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b103epbdu"/><path class="wre6mlbjq"/><path class="cz6z9n00t"/>`,
		"fallback": "selfhst:colota-dark",
	});
}

export default Component;
