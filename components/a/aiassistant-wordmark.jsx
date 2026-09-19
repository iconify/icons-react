import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkn_koeov.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkn_koeov"/>`,
		"fallback": "devicon-plain:aiassistant-wordmark",
	});
}

export default Component;
