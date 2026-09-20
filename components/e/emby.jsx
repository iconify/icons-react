import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg_rohbjm.css';
import '../../css/c/cdq24z_9g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg_rohbjm"/><path class="cdq24z_9g"/>`,
		"fallback": "selfhst:emby",
	});
}

export default Component;
