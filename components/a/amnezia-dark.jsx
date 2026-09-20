import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to735iv_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to735iv_z"/>`,
		"fallback": "selfhst:amnezia-dark",
	});
}

export default Component;
