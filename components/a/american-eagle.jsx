import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3-9yacyq.css';
import '../../css/p/p796kerln.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="i3-9yacyq"/><path class="p796kerln"/>`,
		"fallback": "selfhst:american-eagle",
	});
}

export default Component;
