import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/bwk5rwbue.css';
import '../../css/o/okqtn8bwz.css';
import '../../css/z/zcrd39aiv.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="bwk5rwbue"/><path class="okqtn8bwz"/><path class="zcrd39aiv"/></g>`,
		"fallback": "marketeq:cylinder",
	});
}

export default Component;
