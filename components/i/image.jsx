import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx66pva8x.css';
import '../../css/l/l67st8b5a.css';
import '../../css/s/s_a69j5sy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx66pva8x wm-k"/><path class="l67st8b5a wm-a"/><path class="s_a69j5sy wm-a"/>`,
		"fallback": "withicons-bauhaus:image",
	});
}

export default Component;
