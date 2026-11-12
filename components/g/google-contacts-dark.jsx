import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq5ai9bxx.css';
import '../../css/q/q2ap52b-o.css';
import '../../css/f/fipn1mb5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq5ai9bxx"/><path class="q2ap52b-o"/><path class="fipn1mb5i"/>`,
		"fallback": "selfhst:google-contacts-dark",
	});
}

export default Component;
