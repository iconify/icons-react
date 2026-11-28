import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho1t4rbfe.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b9-4_ibnd.css';
import '../../css/x/xyoxb65ol.css';
import '../../css/v/vnk69pgkm.css';
import '../../css/q/qtd3p_3xs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho1t4rbfe secondary"/><g class="dt0cm9dhy primary"><path class="b9-4_ibnd"/><path class="xyoxb65ol"/><path class="vnk69pgkm"/><path class="qtd3p_3xs"/></g>`,
		"fallback": "iconaut:gift-duo",
	});
}

export default Component;
