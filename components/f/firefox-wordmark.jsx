import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-opoeb5s.css';
import '../../css/k/k4cnuob7n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m-opoeb5s"/><path class="k4cnuob7n"/>`,
		"fallback": "devicon-plain:firefox-wordmark",
	});
}

export default Component;
