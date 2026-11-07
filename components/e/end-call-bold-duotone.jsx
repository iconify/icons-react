import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfwi7necl.css';
import '../../css/b/bohfcinem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rfwi7necl"/><path class="bohfcinem"/>`,
		"fallback": "solar:end-call-bold-duotone",
	});
}

export default Component;
