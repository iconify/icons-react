import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p-9lnrvey.css';
import '../../css/w/wbfrzdxkc.css';
import '../../css/o/oe68fkbpc.css';
import '../../css/z/zf0lc5abk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p-9lnrvey"/><path class="wbfrzdxkc"/><path class="oe68fkbpc"/><path class="zf0lc5abk"/></g>`,
		"fallback": "streamline-plump-color:ai-generate-voice-robot-2-flat",
	});
}

export default Component;
