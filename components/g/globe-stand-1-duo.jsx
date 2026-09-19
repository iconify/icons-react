import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5oh21qle.css';
import '../../css/f/fweop44zq.css';
import '../../css/d/dixd5tz-u.css';
import '../../css/p/pkn-7v7fr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t5oh21qle"/><path class="fweop44zq"/><path class="dixd5tz-u"/><path class="pkn-7v7fr"/></g>`,
		"fallback": "glyphs:globe-stand-1-duo",
	});
}

export default Component;
