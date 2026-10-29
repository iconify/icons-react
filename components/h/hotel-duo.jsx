import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z2biv6b_q.css';
import '../../css/b/b5prcacsn.css';
import '../../css/m/m5jxqbcrl.css';
import '../../css/l/lv0a4nb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z2biv6b_q"/><path class="b5prcacsn wm-a"/><path class="m5jxqbcrl"/><path class="lv0a4nb0f wm-a"/></g>`,
		"fallback": "withicons:hotel-duo",
	});
}

export default Component;
