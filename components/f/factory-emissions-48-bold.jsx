import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc93bwpoh.css';
import '../../css/s/sc1f8rb_h.css';
import '../../css/m/mo7b8rbns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc93bwpoh"/><path class="sc1f8rb_h"/><path class="mo7b8rbns"/>`,
		"fallback": "energy-icons:factory-emissions-48-bold",
	});
}

export default Component;
