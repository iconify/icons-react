import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtz_8836t.css';
import '../../css/r/rd173ubeg.css';
import '../../css/f/ftbksp_ll.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtz_8836t"/><path class="rd173ubeg"/><path class="ftbksp_ll"/>`,
		"fallback": "energy-icons:chicken-leg-48",
	});
}

export default Component;
