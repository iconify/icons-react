import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzw0sac3g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzw0sac3g"/>`,
		"fallback": "selfhst:coder-dark",
	});
}

export default Component;
