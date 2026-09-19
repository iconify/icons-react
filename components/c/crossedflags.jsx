import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/astguezjt.css';
import '../../css/m/m9cbxbbqp.css';
import '../../css/q/qi32o3t-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="astguezjt"/><path class="m9cbxbbqp"/><path class="qi32o3t-t"/>`,
		"fallback": "fxemoji:crossedflags",
	});
}

export default Component;
