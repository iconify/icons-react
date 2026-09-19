import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mewa30evz.css';
import '../../css/a/ar14ntiwg.css';
import '../../css/v/vhv3_5mqf.css';
import '../../css/z/zgewaubsk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mewa30evz"/><path class="ar14ntiwg"/><path class="vhv3_5mqf"/><path class="zgewaubsk"/></g>`,
		"fallback": "fluent-emoji-flat:hot-dog",
	});
}

export default Component;
