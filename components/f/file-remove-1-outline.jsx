import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxv4iwbfk.css';
import '../../css/o/ojbsnh9jw.css';
import '../../css/o/ornlhixah.css';
import '../../css/s/sfzlwaceu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxv4iwbfk"/><path clip-rule="evenodd" class="ojbsnh9jw"/><path class="ornlhixah"/><path clip-rule="evenodd" class="sfzlwaceu"/></g>`,
		"fallback": "glyphs:file-remove-1-outline",
	});
}

export default Component;
