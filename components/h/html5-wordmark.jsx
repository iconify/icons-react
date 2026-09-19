import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8p978b8t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8p978b8t"/>`,
		"fallback": "devicon-plain:html5-wordmark",
	});
}

export default Component;
