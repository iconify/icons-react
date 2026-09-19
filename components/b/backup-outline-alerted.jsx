import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf9v9teof.css';
import '../../css/z/zaydmwbwh.css';
import '../../css/t/t4nnhmndk.css';
import '../../css/g/g04gfaccp.css';
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
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted lf9v9teof"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted zaydmwbwh"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted t4nnhmndk"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted g04gfaccp"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-5--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:backup-outline-alerted",
	});
}

export default Component;
