import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk23j_baf.css';
import '../../css/a/a79iatz1t.css';
import '../../css/d/d_fna2skx.css';
import '../../css/a/a2zawsbwg.css';
import '../../css/d/d-g_3zs_k.css';
import '../../css/q/q94gosbsq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 kk23j_baf"/><path class="a79iatz1t clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 d_fna2skx"/><path class="a2zawsbwg clr-i-outline clr-i-outline-path-4"/><path class="clr-i-outline clr-i-outline-path-5 d-g_3zs_k"/><path class="clr-i-outline clr-i-outline-path-6 q94gosbsq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:form-line",
	});
}

export default Component;
