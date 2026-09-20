import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/weyrflzob.css';
import '../../css/y/y34np8hsx.css';
import '../../css/b/bhkz1qbpx.css';
import '../../css/q/qjmfgenot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="weyrflzob"/><path class="y34np8hsx"/><path class="bhkz1qbpx"/><path class="qjmfgenot"/></g>`,
		"fallback": "streamline-sharp-color:image-highlights",
	});
}

export default Component;
