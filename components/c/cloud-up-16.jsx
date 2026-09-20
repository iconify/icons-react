import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmo45hhmm.css';
import '../../css/h/hb4vkiz6b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmo45hhmm"/><path class="hb4vkiz6b"/>`,
		"fallback": "qlementine-icons:cloud-up-16",
	});
}

export default Component;
