import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvbcrdb1n.css';
import '../../css/z/z_cbqpboy.css';
import '../../css/h/hfo2n9z0l.css';
import '../../css/i/ideoyl8wk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="qvbcrdb1n"/><rect class="z_cbqpboy"/><rect class="hfo2n9z0l"/><rect class="ideoyl8wk"/></g>`,
		"fallback": "glyphs-poly:ellipsis-square",
	});
}

export default Component;
