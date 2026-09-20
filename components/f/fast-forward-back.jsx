import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gv908_96h.css';
import '../../css/z/zczauvbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gv908_96h"/><path class="zczauvbgu"/></g>`,
		"fallback": "mage:fast-forward-back",
	});
}

export default Component;
