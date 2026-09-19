import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3kb4cgpl.css';
import '../../css/w/wuu1i6jkg.css';
import '../../css/b/bmkkjed5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="r3kb4cgpl"><path class="wuu1i6jkg"/><path class="bmkkjed5c"/></g>`,
		"fallback": "iconamoon:cloud-yes-bold",
	});
}

export default Component;
