import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejvlv_b-a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejvlv_b-a"/>`,
		"fallback": "selfhst:heroku",
	});
}

export default Component;
