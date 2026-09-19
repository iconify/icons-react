import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bnrk32e2w.css';
import '../../css/u/u6kjrrbff.css';
import '../../css/b/bxv5zqbfw.css';
import '../../css/p/pgkotf3_e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><g transform="translate(2 2)"><circle class="bnrk32e2w"/><ellipse class="u6kjrrbff"/><path class="bxv5zqbfw"/></g><path class="pgkotf3_e"/></g>`,
		"fallback": "si-glyph:ambulance",
	});
}

export default Component;
