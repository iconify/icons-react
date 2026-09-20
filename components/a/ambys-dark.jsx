import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgx99j8cw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgx99j8cw"/>`,
		"fallback": "selfhst:ambys-dark",
	});
}

export default Component;
