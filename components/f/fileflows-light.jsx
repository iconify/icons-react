import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwad2ux7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwad2ux7y"/>`,
		"fallback": "selfhst:fileflows-light",
	});
}

export default Component;
