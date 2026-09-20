import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnhtrnb3q.css';
import '../../css/t/t779flbam.css';
import '../../css/u/u_oisfboa.css';
import '../../css/o/omh22_buf.css';
import '../../css/a/a9ituy3vd.css';
import '../../css/p/pwicf-wei.css';
import '../../css/p/pju8nz4jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnhtrnb3q"/><circle class="t779flbam"/><circle class="u_oisfboa"/><circle class="omh22_buf"/><circle class="a9ituy3vd"/><circle class="pwicf-wei"/><circle class="pju8nz4jg"/></g>`,
		"fallback": "proicons:building-multiple",
	});
}

export default Component;
