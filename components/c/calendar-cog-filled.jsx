import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdltmv-sf.css';
import '../../css/g/gl2m_3bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdltmv-sf"/><path class="gl2m_3bhg"/>`,
		"fallback": "boxicons:calendar-cog-filled",
	});
}

export default Component;
