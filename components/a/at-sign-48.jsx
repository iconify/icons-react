import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3eacdoxs.css';
import '../../css/m/m9i0cybsw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3eacdoxs"/><path class="m9i0cybsw"/>`,
		"fallback": "energy-icons:at-sign-48",
	});
}

export default Component;
