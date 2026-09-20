import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzzc_c6ad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzzc_c6ad"/>`,
		"fallback": "selfhst:git-pages-light",
	});
}

export default Component;
