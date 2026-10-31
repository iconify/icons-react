import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh9j6mi2w.css';
import '../../css/m/myx7ffs3u.css';
import '../../css/b/b4shz3b4f.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xh9j6mi2w"/><path class="myx7ffs3u"/><path class="b4shz3b4f"/></g>`,
		"fallback": "cif:de",
	});
}

export default Component;
