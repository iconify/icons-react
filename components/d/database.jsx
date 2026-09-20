import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d3s5lw5wz.css';
import '../../css/b/b2k2a-inc.css';
import '../../css/p/p9vr9ac7s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d3s5lw5wz"/><path class="b2k2a-inc"/><path class="p9vr9ac7s"/></g>`,
		"fallback": "streamline:database",
	});
}

export default Component;
