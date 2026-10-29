import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mj6oigypz.css';
import '../../css/g/g930zob6l.css';
import '../../css/x/xmjt7ob1m.css';
import '../../css/x/xzg0hfbtu.css';
import '../../css/s/sagbwcczu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mj6oigypz"/><path class="g930zob6l wm-k"/><path class="wm-s xmjt7ob1m"/><path class="wm-k xzg0hfbtu"/><path class="sagbwcczu wm-s"/></g>`,
		"fallback": "withicons:house-plus-sketch",
	});
}

export default Component;
