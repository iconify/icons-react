import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hrq90hfel.css';
import '../../css/h/hnp2d4j9m.css';
import '../../css/d/dpcixdbfi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><circle class="hrq90hfel"/><path class="hnp2d4j9m"/><path class="dpcixdbfi"/></g>`,
		"fallback": "icon-park:handle-y",
	});
}

export default Component;
