import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rb8gkj9-a.css';
import '../../css/j/jbr_j0blt.css';
import '../../css/n/nv0m_cb4w.css';
import '../../css/f/f_04z-bek.css';
import '../../css/e/en05rfvys.css';
import '../../css/e/ezh-tbj6k.css';
import '../../css/j/jqfjuiimr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rb8gkj9-a"/><path class="jbr_j0blt"/><path class="nv0m_cb4w"/><path class="f_04z-bek"/><path class="en05rfvys"/><path class="ezh-tbj6k"/><path class="jqfjuiimr"/></g>`,
		"fallback": "fluent-emoji-flat:bento-box",
	});
}

export default Component;
