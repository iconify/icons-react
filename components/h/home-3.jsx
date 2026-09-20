import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kxx5_xb1a.css';
import '../../css/a/affg4izcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kxx5_xb1a"/><path class="affg4izcu"/></g>`,
		"fallback": "mage:home-3",
	});
}

export default Component;
