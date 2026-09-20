import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqt35052q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqt35052q"/>`,
		"fallback": "material-icon-theme:husky",
	});
}

export default Component;
