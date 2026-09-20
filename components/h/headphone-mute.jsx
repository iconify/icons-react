import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n9lrv0bxv.css';
import '../../css/p/p3y9-8bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n9lrv0bxv"/><path class="p3y9-8bfw"/></g>`,
		"fallback": "mage:headphone-mute",
	});
}

export default Component;
