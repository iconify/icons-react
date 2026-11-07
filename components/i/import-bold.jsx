import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfdoik__w.css';
import '../../css/m/m_qerhonx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kfdoik__w"/><path class="m_qerhonx"/>`,
		"fallback": "solar:import-bold",
	});
}

export default Component;
