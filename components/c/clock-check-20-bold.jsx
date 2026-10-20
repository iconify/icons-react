import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwyep9bvy.css';
import '../../css/b/buhaxzbzx.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwyep9bvy"/><path class="buhaxzbzx"/><path class="aqsnv9bnd"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:clock-check-20-bold",
	});
}

export default Component;
