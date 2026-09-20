import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx2mo8b7f.css';
import '../../css/b/bc7209bjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx2mo8b7f"/><path class="bc7209bjv"/>`,
		"fallback": "selfhst:boson",
	});
}

export default Component;
