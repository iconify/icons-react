import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnsc5ccym.css';
import '../../css/g/g7z1o33yi.css';
import '../../css/q/q_kfvnbxk.css';
import '../../css/g/grp9m_10s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hnsc5ccym"/><rect class="g7z1o33yi"/><rect class="q_kfvnbxk"/><rect class="grp9m_10s"/></g>`,
		"fallback": "majesticons:checkbox-list-line",
	});
}

export default Component;
