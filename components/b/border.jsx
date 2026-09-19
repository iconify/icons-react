import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ykwudc3rm.css';
import '../../css/e/eql_rwt9f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ykwudc3rm"/><path class="eql_rwt9f"/></g>`,
		"fallback": "glyphs-poly:border",
	});
}

export default Component;
