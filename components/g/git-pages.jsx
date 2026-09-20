import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjvwrvb1c.css';
import '../../css/j/jobtlp51p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjvwrvb1c"/><path class="jobtlp51p"/>`,
		"fallback": "selfhst:git-pages",
	});
}

export default Component;
