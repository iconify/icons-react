import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dzduor5dc.css';
import '../../css/l/l6ov_9bcy.css';
import '../../css/c/ces7xkb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dzduor5dc"/><path class="l6ov_9bcy"/><path class="ces7xkb-y"/></g>`,
		"fallback": "streamline-cyber:baby-face",
	});
}

export default Component;
