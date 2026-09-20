import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaf7zzb_b.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/a/aymm9687y.css';
import '../../css/r/rbrc508ky.css';
import '../../css/l/ldneyybya.css';
import '../../css/b/bs3jnjb_k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaf7zzb_b"/><g class="hzhb0bcwn"><path class="aymm9687y"/><path class="rbrc508ky"/><path class="ldneyybya"/><path class="bs3jnjb_k"/></g>`,
		"fallback": "openmoji:alien-monster",
	});
}

export default Component;
