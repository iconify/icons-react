import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zifwembjz.css';
import '../../css/r/rbpght8ec.css';
import '../../css/t/t7ns7tbvi.css';
import '../../css/x/x6zc0oj6f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zifwembjz"/><path class="rbpght8ec"/><path class="t7ns7tbvi"/><path class="x6zc0oj6f"/></g>`,
		"fallback": "glyphs:handshake-duo",
	});
}

export default Component;
