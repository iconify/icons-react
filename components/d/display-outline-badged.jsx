import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfdi2lb9a.css';
import '../../css/x/xx65_lb7e.css';
import '../../css/u/uke07e0cf.css';
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
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged nfdi2lb9a"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged xx65_lb7e"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged uke07e0cf"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:display-outline-badged",
	});
}

export default Component;
