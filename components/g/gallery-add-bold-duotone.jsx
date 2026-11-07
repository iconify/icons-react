import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5u34vbpt.css';
import '../../css/i/iwa9eupgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o5u34vbpt"/><path class="iwa9eupgf"/>`,
		"fallback": "solar:gallery-add-bold-duotone",
	});
}

export default Component;
