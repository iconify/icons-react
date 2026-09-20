import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfamlxbej.css';
import '../../css/l/lwt7zu3on.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfamlxbej"/><path class="lwt7zu3on"/>`,
		"fallback": "selfhst:bracket-light",
	});
}

export default Component;
