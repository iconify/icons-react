import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppv1d8b4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppv1d8b4d"/>`,
		"fallback": "selfhst:freeshard-light",
	});
}

export default Component;
