import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2pg9jc9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2pg9jc9a"/>`,
		"fallback": "bxs:eyedropper",
	});
}

export default Component;
