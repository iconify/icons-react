import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6lysgbdu.css';
import '../../css/g/gin1cnjoc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6lysgbdu"/><path class="gin1cnjoc"/>`,
		"fallback": "selfhst:google-translate-light",
	});
}

export default Component;
