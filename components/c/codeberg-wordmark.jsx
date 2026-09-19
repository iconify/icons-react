import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgf_ijbzu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgf_ijbzu"/>`,
		"fallback": "devicon-plain:codeberg-wordmark",
	});
}

export default Component;
