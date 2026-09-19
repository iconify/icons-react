import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fggntxbto.css';
import '../../css/p/pykr1s3ee.css';
import '../../css/e/eotwmrmzs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fggntxbto"/><path class="pykr1s3ee"/><path class="eotwmrmzs"/></g>`,
		"fallback": "glyphs-poly:comment-exclamation",
	});
}

export default Component;
