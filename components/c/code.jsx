import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqtl5g6pa.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqtl5g6pa"/>`,
		"fallback": "octicon:code",
	});
}

export default Component;
