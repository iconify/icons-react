import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asoc6abfb.css';
import '../../css/b/b8uc8qb-p.css';
import '../../css/r/refo3vb5p.css';
import '../../css/z/z5wo1fb-k.css';
import '../../css/b/biqbl5nrf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="asoc6abfb"/><path class="b8uc8qb-p"/><path class="refo3vb5p"/><path clip-rule="evenodd" class="z5wo1fb-k"/><path clip-rule="evenodd" class="biqbl5nrf"/></g>`,
		"fallback": "glyphs-poly:globe-stand-1",
	});
}

export default Component;
