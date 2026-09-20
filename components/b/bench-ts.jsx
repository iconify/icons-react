import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvrt6vnvm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvrt6vnvm"/>`,
		"fallback": "material-icon-theme:bench-ts",
	});
}

export default Component;
