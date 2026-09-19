import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a519wcbzu.css';
import '../../css/b/bhe6xabkp.css';
import '../../css/d/d2am9r9ns.css';
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
		"content": `<path class="a519wcbzu clr-i-outline--badged clr-i-outline-path-1--badged"/><path class="bhe6xabkp clr-i-outline--badged clr-i-outline-path-2--badged"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged d2am9r9ns"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:alarm-clock-outline-badged",
	});
}

export default Component;
