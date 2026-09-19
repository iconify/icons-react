import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beuy52btz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beuy52btz"/>`,
		"fallback": "fa6-brands:google-scholar",
	});
}

export default Component;
