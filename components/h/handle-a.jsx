import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hrq90hfel.css';
import '../../css/t/tr6q8eujb.css';
import '../../css/l/lipzzlbqo.css';
import '../../css/x/xmakm0znk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><circle class="hrq90hfel"/><path class="tr6q8eujb"/><path class="lipzzlbqo"/><path class="xmakm0znk"/></g>`,
		"fallback": "icon-park:handle-a",
	});
}

export default Component;
