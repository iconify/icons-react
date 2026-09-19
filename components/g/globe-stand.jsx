import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asoc6abfb.css';
import '../../css/c/cyzgarbmo.css';
import '../../css/r/refo3vb5p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="asoc6abfb"/><path class="cyzgarbmo"/><path class="refo3vb5p"/></g>`,
		"fallback": "glyphs-poly:globe-stand",
	});
}

export default Component;
