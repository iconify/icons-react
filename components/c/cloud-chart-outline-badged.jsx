import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq5_7wbcb.css';
import '../../css/u/u5p0img3y.css';
import '../../css/z/zfepgc0mr.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq5_7wbcb clr-i-outline--badged clr-i-outline-path-1--badged"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged u5p0img3y"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged zfepgc0mr"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:cloud-chart-outline-badged",
	});
}

export default Component;
