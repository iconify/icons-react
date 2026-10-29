import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gt1o1xisn.css';
import '../../css/z/zuzzs3bke.css';
import '../../css/o/ot4dkg9sh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gt1o1xisn wm-a"/><path class="wm-k zuzzs3bke"/><path class="ot4dkg9sh wm-a"/></g>`,
		"fallback": "withicons:avatar-person-wheelchair-sketch",
	});
}

export default Component;
