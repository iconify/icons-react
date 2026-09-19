import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq5_7wbcb.css';
import '../../css/b/b4portera.css';
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
		"content": `<path class="bq5_7wbcb clr-i-outline--badged clr-i-outline-path-1--badged"/><path class="b4portera clr-i-outline--badged clr-i-outline-path-2--badged"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-22--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:heat-map-outline-badged",
	});
}

export default Component;
