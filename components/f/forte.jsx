import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p17ncey3b.css';
import '../../css/s/s5j8cpt3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p17ncey3b"/><path class="s5j8cpt3f"/>`,
		"fallback": "selfhst:forte",
	});
}

export default Component;
