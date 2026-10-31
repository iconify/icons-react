import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/m/m_7nubn3y.css';
import '../../css/d/dqwb9tbtv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path clip-rule="evenodd" class="m_7nubn3y"/><path class="dqwb9tbtv"/></g>`,
		"fallback": "streamline-kameleon-color:aid-kit-pop",
	});
}

export default Component;
