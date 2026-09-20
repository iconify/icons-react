import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okdhzpq9i.css';
import '../../css/s/skok2lbcb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okdhzpq9i"/><path class="skok2lbcb"/>`,
		"fallback": "selfhst:beestation",
	});
}

export default Component;
