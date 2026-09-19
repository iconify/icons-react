import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9mno1zme.css';
import '../../css/x/xh51xx53o.css';
import '../../css/e/eajk65b4i.css';
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
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged d9mno1zme"/><circle class="clr-i-outline--badged clr-i-outline-path-2--badged xh51xx53o"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged eajk65b4i"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:help-outline-badged",
	});
}

export default Component;
