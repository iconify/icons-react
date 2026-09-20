import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pezxs9bin.css';
import '../../css/b/b10du-zvb.css';
import '../../css/f/fa3gx-2-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pezxs9bin"/><circle class="b10du-zvb"/><path class="fa3gx-2-i"/></g>`,
		"fallback": "reicon:gear2",
	});
}

export default Component;
