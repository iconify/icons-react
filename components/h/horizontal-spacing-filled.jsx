import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clh07fbwo.css';
import '../../css/h/hhq74abkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clh07fbwo"/><rect class="hhq74abkp"/>`,
		"fallback": "boxicons:horizontal-spacing-filled",
	});
}

export default Component;
