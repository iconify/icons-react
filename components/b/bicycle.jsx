import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfsz-uvig.css';

const viewBox = {"width":2304,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfsz-uvig"/>`,
		"fallback": "fa:bicycle",
	});
}

export default Component;
