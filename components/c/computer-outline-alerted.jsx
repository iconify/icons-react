import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxq6qwowc.css';
import '../../css/a/a0o-3ccgz.css';
import '../../css/l/l3r4i8v1h.css';
import '../../css/d/dpk7my0va.css';
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
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted zxq6qwowc"/><path class="a0o-3ccgz clr-i-outline--alerted clr-i-outline-path-2--alerted"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted l3r4i8v1h"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted dpk7my0va"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-5--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:computer-outline-alerted",
	});
}

export default Component;
