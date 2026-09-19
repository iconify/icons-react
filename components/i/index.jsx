import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdfbblb0o.css';
import '../../css/l/l78-x2byw.css';
import '../../css/e/eghcg3_xc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdfbblb0o"/><path class="l78-x2byw"/><path class="eghcg3_xc"/>`,
		"fallback": "fxemoji:index",
	});
}

export default Component;
