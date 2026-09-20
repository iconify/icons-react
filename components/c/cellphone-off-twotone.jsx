import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c63oqn.css';
import '../../css/g/g26hbu.css';
import '../../css/t/t5pxry.css';
import '../../css/e/es_8rf.css';
import '../../css/j/jnqe1f.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-3crpcp.css';
import '../../css/d/d-70g21a.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWfpoBcxU"><path class="c63oqn g26hbu t5pxry"/><path class="es_8rf g26hbu"/><path class="jnqe1f oxx-om t5pxry"/></mask></defs><path mask="url(#SVGWfpoBcxU)" class="botfzx"/><path class="gd_4-q jnqe1f t5pxry"/>`,
		"fallback": "line-md:cellphone-off-twotone",
	});
}

export default Component;
