import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkz65tbzv.css';
import '../../css/b/bm74p9apf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkz65tbzv"/><path class="bm74p9apf"/>`,
		"fallback": "cil:action-redo",
	});
}

export default Component;
