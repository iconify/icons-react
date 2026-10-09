import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sabjbxbkn.css';
import '../../css/k/kosmuobvp.css';
import '../../css/i/iln-rgb3n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sabjbxbkn"/><path class="kosmuobvp"/><path class="iln-rgb3n"/>`,
		"fallback": "energy-icons:desk-lamp-48",
	});
}

export default Component;
