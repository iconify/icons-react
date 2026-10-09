import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcy6jh_of.css';
import '../../css/r/rx-p80tpn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcy6jh_of"/><path class="rx-p80tpn"/>`,
		"fallback": "energy-icons:bug-20-bold",
	});
}

export default Component;
