import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se_exubjd.css';
import '../../css/c/cdr84abnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se_exubjd"/><path class="cdr84abnq"/>`,
		"fallback": "bx:bx-cloud-download",
	});
}

export default Component;
