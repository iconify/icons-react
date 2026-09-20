import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmynbzbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmynbzbcg"/>`,
		"fallback": "keyline-icons:chart-tree-map-sharp-fill",
	});
}

export default Component;
