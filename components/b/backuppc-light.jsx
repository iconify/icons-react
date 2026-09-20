import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em14apxum.css';
import '../../css/g/gdwzp4r6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em14apxum"/><path class="gdwzp4r6l"/>`,
		"fallback": "selfhst:backuppc-light",
	});
}

export default Component;
