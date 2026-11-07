import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhgdmdlsz.css';
import '../../css/u/u-6gmvb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fhgdmdlsz"/><path class="u-6gmvb1e"/>`,
		"fallback": "solar:bar-chair-bold-duotone",
	});
}

export default Component;
