import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l6fo6mbww.css';
import '../../css/r/rfflkhy_z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="l6fo6mbww"/><path class="rfflkhy_z"/></g>`,
		"fallback": "si-glyph:document-help",
	});
}

export default Component;
