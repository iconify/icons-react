import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnzen6byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnzen6byg"/>`,
		"fallback": "tdesign:cherry-filled",
	});
}

export default Component;
