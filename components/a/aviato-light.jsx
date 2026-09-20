import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9cjbac7h.css';
import '../../css/s/sakiijw5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9cjbac7h"/><path class="sakiijw5s"/>`,
		"fallback": "selfhst:aviato-light",
	});
}

export default Component;
