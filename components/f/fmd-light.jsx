import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0ai2gp-g.css';
import '../../css/p/phudelb5j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0ai2gp-g"/><path class="phudelb5j"/>`,
		"fallback": "selfhst:fmd-light",
	});
}

export default Component;
