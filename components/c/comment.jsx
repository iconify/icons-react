import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfp6r-iru.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfp6r-iru"/>`,
		"fallback": "topcoat:comment",
	});
}

export default Component;
