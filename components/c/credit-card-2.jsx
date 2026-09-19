import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqzj6bc5o.css';
import '../../css/g/gyn51--bg.css';
import '../../css/s/saie_4g2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqzj6bc5o"/><path class="gyn51--bg"/><rect transform="rotate(-90 17.434 9.14)" class="saie_4g2c"/>`,
		"fallback": "circum:credit-card-2",
	});
}

export default Component;
