import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exe1s9bim.css';
import '../../css/g/gng30g8lb.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exe1s9bim"/><path class="gng30g8lb"/>`,
		"fallback": "gis:globe-users",
	});
}

export default Component;
