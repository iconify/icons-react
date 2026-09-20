import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zbksxgb9w.css';
import '../../css/s/sutv1obin.css';
import '../../css/l/lrv651b1a.css';
import '../../css/f/fshnnhbjh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="zbksxgb9w"/><path class="sutv1obin"/><path class="lrv651b1a"/><path class="fshnnhbjh"/></g>`,
		"fallback": "streamline-plump-color:battery-charging",
	});
}

export default Component;
