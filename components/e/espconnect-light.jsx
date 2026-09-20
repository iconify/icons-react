import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rok_s9ahy.css';
import '../../css/b/b4_i_1h2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rok_s9ahy"/><path class="b4_i_1h2r"/>`,
		"fallback": "selfhst:espconnect-light",
	});
}

export default Component;
