import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1d-sni5x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h1d-sni5x"/>`,
		"fallback": "teenyicons:airpods-solid",
	});
}

export default Component;
