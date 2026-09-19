import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdzi00bpt.css';
import '../../css/l/lml2oc9mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdzi00bpt"/><path class="lml2oc9mw"/>`,
		"fallback": "bx:chevron-up-square",
	});
}

export default Component;
