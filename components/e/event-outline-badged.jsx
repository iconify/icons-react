import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nje91rp-p.css';
import '../../css/b/b54bhv41g.css';
import '../../css/v/vojd3wb9c.css';
import '../../css/x/x7ii9pxzv.css';
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
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged nje91rp-p"/><path class="b54bhv41g clr-i-outline--badged clr-i-outline-path-2--badged"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged vojd3wb9c"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged x7ii9pxzv"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-5--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:event-outline-badged",
	});
}

export default Component;
