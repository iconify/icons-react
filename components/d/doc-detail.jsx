import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/llkd082ke.css';
import '../../css/v/v8dqwh07n.css';
import '../../css/r/rlqaysbnj.css';
import '../../css/g/g2xvj1bnz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="llkd082ke"/><path class="v8dqwh07n"/><path class="rlqaysbnj"/><rect class="g2xvj1bnz"/></g>`,
		"fallback": "icon-park:doc-detail",
	});
}

export default Component;
