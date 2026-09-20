import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7jn51b8w.css';
import '../../css/v/vrnfpbw3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="r7jn51b8w"/><path class="vrnfpbw3e"/>`,
		"fallback": "selfhst:certimate",
	});
}

export default Component;
