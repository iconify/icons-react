import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svj7mmbvd.css';
import '../../css/d/dayon9i6a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="svj7mmbvd"/><path class="dayon9i6a"/></g>`,
		"fallback": "glyphs-poly:copy-1",
	});
}

export default Component;
