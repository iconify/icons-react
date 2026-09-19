import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3n348bsq.css';
import '../../css/r/rh2mivbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3n348bsq"/><path class="rh2mivbrm"/>`,
		"fallback": "boxicons:globe-africa",
	});
}

export default Component;
