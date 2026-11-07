import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_hf_9u3p.css';
import '../../css/a/autb8mb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_hf_9u3p"/><path class="autb8mb3e"/>`,
		"fallback": "solar:call-dropped-bold",
	});
}

export default Component;
