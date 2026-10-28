import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afc2go00o.css';
import '../../css/e/edmiowbew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afc2go00o"/><path class="edmiowbew"/>`,
		"fallback": "selfhst:flux-operator-light",
	});
}

export default Component;
