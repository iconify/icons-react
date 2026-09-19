import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sab-3jbuj.css';
import '../../css/u/ugqzsebbh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sab-3jbuj"/><path class="ugqzsebbh"/>`,
		"fallback": "cil:garage",
	});
}

export default Component;
