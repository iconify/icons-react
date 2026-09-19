import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu_w_rb3z.css';
import '../../css/m/ml18l_bpc.css';
import '../../css/n/n3k6jv7dq.css';
import '../../css/s/s-u6_uyuf.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 fu_w_rb3z"/><path class="clr-i-solid clr-i-solid-path-2 ml18l_bpc"/><path class="clr-i-solid clr-i-solid-path-3 n3k6jv7dq"/><path class="clr-i-solid clr-i-solid-path-4 s-u6_uyuf"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:hard-drive-disks-solid",
	});
}

export default Component;
