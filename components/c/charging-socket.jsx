import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tbfwcshwt.css';
import '../../css/i/iu850bbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="tbfwcshwt"/><path class="iu850bbci"/></g>`,
		"fallback": "evicons:charging-socket",
	});
}

export default Component;
