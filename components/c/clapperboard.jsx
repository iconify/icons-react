import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uaumiac8d.css';
import '../../css/r/rxmld75-t.css';
import '../../css/f/fnryfbblz.css';
import '../../css/s/scgf5xban.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uaumiac8d"/><path class="rxmld75-t"/><path class="fnryfbblz"/><path class="scgf5xban"/></g>`,
		"fallback": "pepicons:clapperboard",
	});
}

export default Component;
