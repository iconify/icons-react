import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lafhkbbho.css';
import '../../css/i/i-c72_k0i.css';
import '../../css/h/hgg2qtf4l.css';
import '../../css/h/h759uybxe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lafhkbbho"/><path class="i-c72_k0i"/><path class="hgg2qtf4l"/><path class="h759uybxe"/></g>`,
		"fallback": "glyphs:ellipsis-circle-duo",
	});
}

export default Component;
