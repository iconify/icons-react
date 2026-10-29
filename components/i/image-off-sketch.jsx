import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ruztbtuvn.css';
import '../../css/v/vs28pnhuh.css';
import '../../css/c/cff9xkc9z.css';
import '../../css/u/ugjt2qb1i.css';
import '../../css/j/j6an-7elt.css';
import '../../css/u/u5jri5j7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ruztbtuvn wm-k"/><path class="vs28pnhuh wm-a"/><path class="cff9xkc9z wm-s"/><path class="ugjt2qb1i wm-k"/><path class="j6an-7elt wm-a"/><path class="u5jri5j7y wm-s"/></g>`,
		"fallback": "withicons:image-off-sketch",
	});
}

export default Component;
