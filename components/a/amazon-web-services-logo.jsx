import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/u/ut2705q9d.css';
import '../../css/i/i2_86lbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="ut2705q9d"/><path class="i2_86lbua"/></g>`,
		"fallback": "streamline-ultimate-color:amazon-web-services-logo",
	});
}

export default Component;
