import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lctjxf-_e.css';
import '../../css/f/fjc_j-bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lctjxf-_e"/><path class="fjc_j-bcf"/>`,
		"fallback": "cbi:bandcamp",
	});
}

export default Component;
