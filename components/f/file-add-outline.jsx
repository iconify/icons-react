import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4r0j2uqu.css';
import '../../css/o/ojbsnh9jw.css';
import '../../css/p/pyscf72-e.css';
import '../../css/s/sfzlwaceu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m4r0j2uqu"/><path clip-rule="evenodd" class="ojbsnh9jw"/><path class="pyscf72-e"/><path clip-rule="evenodd" class="sfzlwaceu"/></g>`,
		"fallback": "glyphs:file-add-outline",
	});
}

export default Component;
