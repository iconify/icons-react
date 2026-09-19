import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkfj4hbnr.css';
import '../../css/x/xcb-gpijo.css';
import '../../css/r/rktspef3f.css';
import '../../css/y/ys57o7bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkfj4hbnr"/><path class="xcb-gpijo"/><rect class="rktspef3f"/><path class="ys57o7bto"/>`,
		"fallback": "bxl:docker",
	});
}

export default Component;
