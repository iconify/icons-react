import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogyrjcbwt.css';
import '../../css/s/slvzbu1vz.css';
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
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted ogyrjcbwt"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted slvzbu1vz"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-3--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:cpu-outline-alerted",
	});
}

export default Component;
