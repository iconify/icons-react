import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-yifibct.css';
import '../../css/o/ozgjsxydf.css';
import '../../css/a/amd31jbgj.css';
import '../../css/r/ruf-2-4jj.css';
import '../../css/r/rc1ajtu9d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o-yifibct"/><path class="ozgjsxydf"/><path class="amd31jbgj"/><path class="ruf-2-4jj"/><path class="rc1ajtu9d"/></g>`,
		"fallback": "glyphs-poly:d-pad-1",
	});
}

export default Component;
