import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfqbxj_2g.css';

const viewBox = {"width":472,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfqbxj_2g"/>`,
		"fallback": "zmdi:alert-triangle",
	});
}

export default Component;
