import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfh-ukf2y.css';
import '../../css/j/jjd69-byg.css';
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
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged wfh-ukf2y"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged jjd69-byg"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-3--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:import-solid-badged",
	});
}

export default Component;
