import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvsbeo4sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qvsbeo4sr"/>`,
		"fallback": "griddy-icons:air-conditioner",
	});
}

export default Component;
