import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htwi9xkgv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htwi9xkgv"/>`,
		"fallback": "selfhst:ersatztv-dark",
	});
}

export default Component;
