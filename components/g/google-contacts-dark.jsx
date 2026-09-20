import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phb0fspex.css';
import '../../css/o/okn01-ktv.css';
import '../../css/f/fipn1mb5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phb0fspex"/><path class="okn01-ktv"/><path class="fipn1mb5i"/>`,
		"fallback": "selfhst:google-contacts-dark",
	});
}

export default Component;
