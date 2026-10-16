import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9xn_wl3y.css';
import '../../css/z/z7jcrbb9a.css';
import '../../css/z/zf9c-5_5w.css';
import '../../css/l/l87qshb9i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9xn_wl3y"/><path class="z7jcrbb9a"/><path class="zf9c-5_5w"/><path class="l87qshb9i"/>`,
		"fallback": "energy-icons:battery-cycle-20-bold",
	});
}

export default Component;
