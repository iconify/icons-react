import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/covpzf56i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="covpzf56i"/>`,
		"fallback": "selfhst:feedpushr-light",
	});
}

export default Component;
