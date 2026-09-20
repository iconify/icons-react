import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elw13eb3k.css';
import '../../css/n/n2me6q61h.css';
import '../../css/l/lqe4j-bcx.css';
import '../../css/w/wa1g8vb3f.css';
import '../../css/r/rzmrbebwf.css';
import '../../css/o/o65o_hb_z.css';
import '../../css/f/fbsu__bbx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elw13eb3k"/><path class="n2me6q61h"/><circle class="lqe4j-bcx"/><path class="wa1g8vb3f"/><path class="rzmrbebwf"/><circle class="o65o_hb_z"/><circle class="fbsu__bbx"/>`,
		"fallback": "openmoji:hamsa",
	});
}

export default Component;
