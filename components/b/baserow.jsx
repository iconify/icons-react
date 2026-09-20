import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4nwh4frs.css';
import '../../css/r/rkzev_bgd.css';
import '../../css/e/eywngtify.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4nwh4frs"/><path class="rkzev_bgd"/><path class="eywngtify"/>`,
		"fallback": "selfhst:baserow",
	});
}

export default Component;
