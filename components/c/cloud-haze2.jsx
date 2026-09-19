import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sptpt9b4x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sptpt9b4x"/>`,
		"fallback": "bi:cloud-haze2",
	});
}

export default Component;
