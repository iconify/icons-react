import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggt--tbja.css';
import '../../css/t/thqtvsbbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggt--tbja"/><path clip-rule="evenodd" class="thqtvsbbp"/>`,
		"fallback": "basil:heart-off-outline",
	});
}

export default Component;
