import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjihr9vtm.css';
import '../../css/x/xxuxydbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zjihr9vtm"/><path class="xxuxydbvz"/></g>`,
		"fallback": "tdesign:anticlockwise",
	});
}

export default Component;
