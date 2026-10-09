import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erstu9bfm.css';
import '../../css/z/zi8delbng.css';
import '../../css/s/sahdhwl_a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erstu9bfm"/><path class="zi8delbng"/><path class="sahdhwl_a"/>`,
		"fallback": "energy-icons:blade-transport-20-bold",
	});
}

export default Component;
