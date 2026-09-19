import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_76tkbet.css';
import '../../css/f/fcdh-6bep.css';
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
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged u_76tkbet"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged fcdh-6bep"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-3--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:inbox-outline-badged",
	});
}

export default Component;
