import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_78o9bzj.css';
import '../../css/h/hwq7m_mbb.css';
import '../../css/g/grf7r8-rx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v_78o9bzj"/><path clip-rule="evenodd" class="hwq7m_mbb"/><path class="grf7r8-rx"/></g>`,
		"fallback": "healthicons:hematology-laboratory2x-outline",
	});
}

export default Component;
