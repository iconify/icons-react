import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxok5ents.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxok5ents"/>`,
		"fallback": "selfhst:ferrishare-light",
	});
}

export default Component;
