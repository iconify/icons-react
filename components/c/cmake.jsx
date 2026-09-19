import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s85i_fbsw.css';
import '../../css/o/ov9g6-b6k.css';
import '../../css/e/eww8hdbpb.css';
import '../../css/l/lbhftjbbf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s85i_fbsw"/><path class="ov9g6-b6k"/><path class="eww8hdbpb"/><path class="lbhftjbbf"/>`,
		"fallback": "devicon:cmake",
	});
}

export default Component;
