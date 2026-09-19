import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tz6em9sgh.css';
import '../../css/v/vcr7oq-po.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tz6em9sgh"/><path class="vcr7oq-po"/></g>`,
		"fallback": "glyphs:child",
	});
}

export default Component;
