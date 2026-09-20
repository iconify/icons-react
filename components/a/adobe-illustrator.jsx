import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdr4_oh2f.css';
import '../../css/k/kep5dhb8s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdr4_oh2f"/><path class="kep5dhb8s"/>`,
		"fallback": "selfhst:adobe-illustrator",
	});
}

export default Component;
