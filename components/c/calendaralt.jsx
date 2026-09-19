import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9q3a_dks.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9q3a_dks"/>`,
		"fallback": "whh:calendaralt",
	});
}

export default Component;
