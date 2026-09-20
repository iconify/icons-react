import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sralybcnp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sralybcnp"/>`,
		"fallback": "selfhst:backrest-dark",
	});
}

export default Component;
