import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unf09nsdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unf09nsdo"/>`,
		"fallback": "noviair-light:certificate",
	});
}

export default Component;
