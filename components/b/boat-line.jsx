import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mki9f5g3l.css';
import '../../css/h/hncekr46j.css';
import '../../css/s/syg-21b3k.css';
import '../../css/f/fqrk3hb1s.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 mki9f5g3l"/><path class="clr-i-outline clr-i-outline-path-2 hncekr46j"/><path class="clr-i-outline clr-i-outline-path-3 syg-21b3k"/><path class="clr-i-outline clr-i-outline-path-4 fqrk3hb1s"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:boat-line",
	});
}

export default Component;
