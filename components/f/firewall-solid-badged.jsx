import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3rxh0b7g.css';
import '../../css/u/ux2koab0w.css';
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
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged j3rxh0b7g"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged ux2koab0w"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-3--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:firewall-solid-badged",
	});
}

export default Component;
