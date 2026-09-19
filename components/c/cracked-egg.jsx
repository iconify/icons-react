import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ugn01cc5p.css';
import '../../css/t/trlj83v6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ugn01cc5p"/><path class="trlj83v6p"/></g>`,
		"fallback": "iconoir:cracked-egg",
	});
}

export default Component;
