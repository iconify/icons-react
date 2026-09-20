import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvqg2ebaj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvqg2ebaj"/>`,
		"fallback": "selfhst:forgejo-light",
	});
}

export default Component;
