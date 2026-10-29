import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lndkskbcm.css';
import '../../css/u/ut80tnm-z.css';
import '../../css/p/pwyxzrs6i.css';
import '../../css/y/ys2kzn7au.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lndkskbcm wm-k"/><path class="ut80tnm-z wm-k"/><path class="pwyxzrs6i wm-a"/><path class="wm-a ys2kzn7au"/>`,
		"fallback": "withicons-bauhaus:chevrons-up",
	});
}

export default Component;
