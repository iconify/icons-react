import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hx9jwpb-t.css';
import '../../css/c/cb6hoeb9u.css';
import '../../css/c/cl_mzjtei.css';
import '../../css/m/mvrjg2bys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hx9jwpb-t"/><path class="cb6hoeb9u"/><path class="cl_mzjtei"/><path class="mvrjg2bys"/></g>`,
		"fallback": "streamline-freehand-color:database-hand",
	});
}

export default Component;
