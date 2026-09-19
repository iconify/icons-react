import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmdiq6b8t.css';
import '../../css/w/wajy9d3qq.css';
import '../../css/x/xh8-ubb1t.css';
import '../../css/a/a3cp5cbqe.css';
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
		"content": `<path class="bmdiq6b8t clr-i-solid--badged clr-i-solid-path-1--badged"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged wajy9d3qq"/><path class="clr-i-solid--badged clr-i-solid-path-3--badged xh8-ubb1t"/><path class="a3cp5cbqe clr-i-solid--badged clr-i-solid-path-4--badged"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-5--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:backup-solid-badged",
	});
}

export default Component;
