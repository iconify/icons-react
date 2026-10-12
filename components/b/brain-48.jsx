import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl0-fwb4k.css';
import '../../css/o/oxs1yxfms.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl0-fwb4k"/><path class="oxs1yxfms"/>`,
		"fallback": "energy-icons:brain-48",
	});
}

export default Component;
