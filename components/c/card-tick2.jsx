import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y61w3cbkk.css';
import '../../css/m/mow4xmq7z.css';
import '../../css/k/k6yvmac6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y61w3cbkk"/><path class="mow4xmq7z"/><path class="k6yvmac6f"/></g>`,
		"fallback": "reicon:card-tick2",
	});
}

export default Component;
