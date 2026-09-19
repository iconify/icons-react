import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-8ecobzw.css';
import '../../css/u/uiiwwqu8p.css';
import '../../css/i/i5d91fvbx.css';
import '../../css/b/bs2-qkmiq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d-8ecobzw"/><rect class="uiiwwqu8p"/><path clip-rule="evenodd" class="i5d91fvbx"/><path class="bs2-qkmiq"/></g>`,
		"fallback": "glyphs-poly:images-1",
	});
}

export default Component;
