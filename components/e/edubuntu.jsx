import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgfplbbgp.css';
import '../../css/g/gsi1lc1zm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgfplbbgp"/><path class="gsi1lc1zm"/>`,
		"fallback": "selfhst:edubuntu",
	});
}

export default Component;
