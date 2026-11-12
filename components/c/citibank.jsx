import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il552bv-l.css';
import '../../css/u/uzxqaob3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il552bv-l"/><path class="uzxqaob3s"/>`,
		"fallback": "selfhst:citibank",
	});
}

export default Component;
