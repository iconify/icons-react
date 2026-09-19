import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vfyaucbbp.css';
import '../../css/c/cznraqbah.css';
import '../../css/w/w0i8w12sf.css';
import '../../css/d/dxv3vxb1e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vfyaucbbp"/><path class="cznraqbah"/><path clip-rule="evenodd" class="w0i8w12sf"/><path class="dxv3vxb1e"/></g>`,
		"fallback": "glyphs-poly:inbox-1",
	});
}

export default Component;
