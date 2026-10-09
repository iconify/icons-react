import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldi2fgv9s.css';
import '../../css/l/li4k_5b9n.css';
import '../../css/d/de_fa463w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldi2fgv9s"/><path class="li4k_5b9n"/><path class="de_fa463w"/>`,
		"fallback": "energy-icons:database-20-bold",
	});
}

export default Component;
