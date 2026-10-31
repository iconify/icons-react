import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7p2enbbo.css';
import '../../css/v/v1a49acba.css';
import '../../css/t/tkrg51qty.css';
import '../../css/e/ewv-anbkb.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7p2enbbo"/><path class="v1a49acba"/><path class="tkrg51qty"/><path class="ewv-anbkb"/>`,
		"fallback": "tabler-flags:aruba",
	});
}

export default Component;
