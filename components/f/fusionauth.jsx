import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvz4neb7i.css';
import '../../css/o/o-xvump-w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvz4neb7i"/><path class="o-xvump-w"/>`,
		"fallback": "selfhst:fusionauth",
	});
}

export default Component;
