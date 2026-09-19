import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cujrrqbom.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cujrrqbom"/>`,
		"fallback": "academicons:dataverse-square",
	});
}

export default Component;
