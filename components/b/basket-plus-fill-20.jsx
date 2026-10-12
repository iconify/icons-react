import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxm-7vagy.css';
import '../../css/r/r3cn_9bmy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxm-7vagy"/><path class="r3cn_9bmy"/>`,
		"fallback": "garden:basket-plus-fill-20",
	});
}

export default Component;
