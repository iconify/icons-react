import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k12za_xqk.css';
import '../../css/r/r6wv3sbay.css';
import '../../css/b/b9c3bg9mh.css';
import '../../css/p/p0lznmxvv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k12za_xqk"/><path class="r6wv3sbay"/><path class="b9c3bg9mh"/><path class="p0lznmxvv"/></g>`,
		"fallback": "glyphs:globe-stand-west-duo",
	});
}

export default Component;
