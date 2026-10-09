import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7o8wb3mz.css';
import '../../css/f/fcdm3_xoh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7o8wb3mz"/><path class="fcdm3_xoh"/>`,
		"fallback": "energy-icons:corner-up-left-48",
	});
}

export default Component;
