import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me_5zkbyf.css';
import '../../css/u/ufikoxbls.css';
import '../../css/b/b2o8jac-d.css';
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
		"content": `<circle class="clr-i-outline--badged clr-i-outline-path-1--badged me_5zkbyf"/><circle class="clr-i-outline--badged clr-i-outline-path-2--badged ufikoxbls"/><circle class="b2o8jac-d clr-i-outline--badged clr-i-outline-path-3--badged"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:ellipsis-horizontal-outline-badged",
	});
}

export default Component;
