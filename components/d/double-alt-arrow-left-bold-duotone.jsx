import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb4o__b5r.css';
import '../../css/n/n2zpnybfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb4o__b5r"/><path clip-rule="evenodd" class="n2zpnybfq"/>`,
		"fallback": "solar:double-alt-arrow-left-bold-duotone",
	});
}

export default Component;
