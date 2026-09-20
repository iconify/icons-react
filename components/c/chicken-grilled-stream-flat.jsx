import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/grb8i2b2m.css';
import '../../css/a/a28-f9bvr.css';
import '../../css/b/bfh75ponz.css';
import '../../css/g/gcbrm_bln.css';
import '../../css/a/aygheqbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="grb8i2b2m"/><path clip-rule="evenodd" class="a28-f9bvr"/><path class="bfh75ponz"/><path clip-rule="evenodd" class="gcbrm_bln"/><path class="aygheqbbd"/></g>`,
		"fallback": "streamline-sharp-color:chicken-grilled-stream-flat",
	});
}

export default Component;
