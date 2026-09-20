import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8-kk1bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n8-kk1bik"/>`,
		"fallback": "reicon:grad-cap",
	});
}

export default Component;
