import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b774deb7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b774deb7u"/>`,
		"fallback": "selfhst:borg",
	});
}

export default Component;
