import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk8f1vb6j.css';
import '../../css/a/ab8l0tjds.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk8f1vb6j"/><path class="ab8l0tjds"/>`,
		"fallback": "devicon:consul-wordmark",
	});
}

export default Component;
