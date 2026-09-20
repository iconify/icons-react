import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k1kaj4bsf.css';
import '../../css/a/a6vgmy7su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k1kaj4bsf"/><path class="a6vgmy7su"/></g>`,
		"fallback": "streamline-ultimate:electronics-led-light",
	});
}

export default Component;
