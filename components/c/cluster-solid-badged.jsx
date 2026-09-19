import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqwwnccno.css';
import '../../css/x/xcue8cbba.css';
import '../../css/e/e5z_onb4g.css';
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
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged nqwwnccno"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged xcue8cbba"/><path class="clr-i-solid--badged clr-i-solid-path-3--badged e5z_onb4g"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:cluster-solid-badged",
	});
}

export default Component;
