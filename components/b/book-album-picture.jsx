import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phtfdhtmq.css';
import '../../css/f/faok_j0wk.css';
import '../../css/m/mzft2nbcf.css';
import '../../css/f/fgs7pob4p.css';
import '../../css/o/o72zjz46d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="phtfdhtmq"/><path class="faok_j0wk"/><path class="mzft2nbcf"/><path class="fgs7pob4p"/><path class="o72zjz46d"/></g>`,
		"fallback": "streamline-cyber-color:book-album-picture",
	});
}

export default Component;
