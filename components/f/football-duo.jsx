import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oan3fnbps.css';
import '../../css/g/gh3_hccbt.css';
import '../../css/s/ss9y79-sj.css';
import '../../css/o/ok8lecbuh.css';
import '../../css/u/uch55rsgo.css';
import '../../css/g/gu1ynac7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oan3fnbps"/><path class="gh3_hccbt"/><path class="ss9y79-sj wm-a"/><path class="ok8lecbuh wm-a"/><path class="uch55rsgo"/><path class="gu1ynac7g wm-a"/></g>`,
		"fallback": "withicons:football-duo",
	});
}

export default Component;
