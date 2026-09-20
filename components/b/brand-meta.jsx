import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obh3ssbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obh3ssbvk"/>`,
		"fallback": "tabler:brand-meta",
	});
}

export default Component;
