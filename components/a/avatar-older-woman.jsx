import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c1bj_oogc.css';
import '../../css/h/h83iiqbba.css';
import '../../css/s/sn07vob-o.css';
import '../../css/b/b0ibfacrl.css';
import '../../css/g/gaky12syl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c1bj_oogc"/><path class="h83iiqbba"/><path class="sn07vob-o"/><path class="b0ibfacrl"/><path class="gaky12syl"/></g>`,
		"fallback": "withicons-bauhaus:avatar-older-woman",
	});
}

export default Component;
