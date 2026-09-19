import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b54bhv41g.css';
import '../../css/u/u60v_2ieg.css';
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
		"content": `<path class="b54bhv41g clr-i-solid--badged clr-i-solid-path-1--badged"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged u60v_2ieg"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-3--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:event-solid-badged",
	});
}

export default Component;
