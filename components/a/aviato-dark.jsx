import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjf7a61ga.css';
import '../../css/n/n-mc4deaj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjf7a61ga"/><path class="n-mc4deaj"/>`,
		"fallback": "selfhst:aviato-dark",
	});
}

export default Component;
