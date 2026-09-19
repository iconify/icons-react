import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_1x96bbx.css';
import '../../css/i/isv40acai.css';
import '../../css/h/hvfv66fdp.css';
import '../../css/z/z353grbay.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="i_1x96bbx"/><rect class="isv40acai"/><rect class="hvfv66fdp"/><rect class="z353grbay"/></g>`,
		"fallback": "glyphs-poly:box-layout-3",
	});
}

export default Component;
