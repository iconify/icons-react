import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vagjwfb3n.css';
import '../../css/b/ba21eebdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vagjwfb3n"/><path class="ba21eebdo"/>`,
		"fallback": "boxicons:airplay-filled",
	});
}

export default Component;
