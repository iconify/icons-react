import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9a5m2bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e9a5m2bib"/>`,
		"fallback": "griddy-icons:cube-filled",
	});
}

export default Component;
