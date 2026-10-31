import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ubuf0l-kw.css';
import '../../css/h/h20pzcb1e.css';
import '../../css/e/e5e8fq4db.css';
import '../../css/m/mrk4qwc0c.css';
import '../../css/t/tcxxukgzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ubuf0l-kw wm-k"/><path class="h20pzcb1e wm-k"/><path class="e5e8fq4db wm-shadow"/><path class="mrk4qwc0c wm-shine"/><path class="tcxxukgzk wm-shine"/></g>`,
		"fallback": "withicons-valentine:database",
	});
}

export default Component;
