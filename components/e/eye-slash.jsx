import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh3iwjkha.css';
import '../../css/r/r5hrfmbxe.css';
import '../../css/r/rzt6kdb0a.css';
import '../../css/w/wp060k89a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kh3iwjkha"/><path class="r5hrfmbxe"/><path class="rzt6kdb0a"/><path class="wp060k89a"/></g>`,
		"fallback": "glyphs-poly:eye-slash",
	});
}

export default Component;
