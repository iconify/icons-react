import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gjsimrn_i.css';
import '../../css/k/kkz_6zbjg.css';
import '../../css/u/un9laobda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gjsimrn_i"/><path class="kkz_6zbjg"/><path class="un9laobda"/></g>`,
		"fallback": "streamline-freehand-color:color-spray",
	});
}

export default Component;
