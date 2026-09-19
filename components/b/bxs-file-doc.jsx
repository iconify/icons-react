import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfoaij8re.css';
import '../../css/h/hkohktbym.css';
import '../../css/q/q-k3xvb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfoaij8re"/><path class="hkohktbym"/><path class="q-k3xvb8t"/>`,
		"fallback": "bx:bxs-file-doc",
	});
}

export default Component;
