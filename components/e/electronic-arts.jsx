import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4tdwlciq.css';
import '../../css/c/ca1v0e7az.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="m4tdwlciq"/><path class="ca1v0e7az"/>`,
		"fallback": "selfhst:electronic-arts",
	});
}

export default Component;
