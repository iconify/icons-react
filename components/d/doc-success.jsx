import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/je6eo1bha.css';
import '../../css/v/v8dqwh07n.css';
import '../../css/r/rlqaysbnj.css';
import '../../css/n/nsmor3ztm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="je6eo1bha"/><path class="v8dqwh07n"/><path class="rlqaysbnj"/><path class="nsmor3ztm"/></g>`,
		"fallback": "icon-park:doc-success",
	});
}

export default Component;
