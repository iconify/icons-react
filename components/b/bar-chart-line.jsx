import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdxbmxx-r.css';
import '../../css/k/kh7uvqjfd.css';
import '../../css/u/uqem58bur.css';
import '../../css/s/sx9388beu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 tdxbmxx-r"/><path class="clr-i-outline clr-i-outline-path-2 kh7uvqjfd"/><path class="clr-i-outline clr-i-outline-path-3 uqem58bur"/><path class="clr-i-outline clr-i-outline-path-4 sx9388beu"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bar-chart-line",
	});
}

export default Component;
