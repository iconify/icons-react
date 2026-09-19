import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg3jy0b5j.css';
import '../../css/x/x7vk-qbdx.css';
import '../../css/r/rfiuhnyov.css';
import '../../css/m/m0nkn-mmt.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted fg3jy0b5j"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted x7vk-qbdx"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted rfiuhnyov"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted m0nkn-mmt"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-5--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:id-badge-outline-alerted",
	});
}

export default Component;
