import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wo2rq19cf.css';
import '../../css/x/xx97h9bce.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wo2rq19cf"/><path class="xx97h9bce"/></g>`,
		"fallback": "glyphs:gift-2",
	});
}

export default Component;
