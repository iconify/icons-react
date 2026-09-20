import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/iazw9mnub.css';
import '../../css/m/m_-7htfhf.css';
import '../../css/j/jx9zwdo5l.css';
import '../../css/z/zkwm8kbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="iazw9mnub"/><path class="m_-7htfhf"/><path class="jx9zwdo5l"/><path class="zkwm8kbaw"/></g>`,
		"fallback": "streamline-sharp-color:inbox",
	});
}

export default Component;
