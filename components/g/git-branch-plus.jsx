import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qgsq45ngw.css';
import '../../css/v/vb8rssb8w.css';
import '../../css/a/arlyf9ici.css';
import '../../css/r/rw2-4kopo.css';
import '../../css/u/u8cn71brg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qgsq45ngw wm-shadow"/><path class="vb8rssb8w wm-shadow"/><path class="arlyf9ici"/><path class="rw2-4kopo"/><path class="u8cn71brg wm-s"/></g>`,
		"fallback": "withicons-brutal:git-branch-plus",
	});
}

export default Component;
