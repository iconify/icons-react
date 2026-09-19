import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/svsxe4bcz.css';
import '../../css/r/rdlh48bhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="svsxe4bcz"/><path class="rdlh48bhx"/></g>`,
		"fallback": "hugeicons:air-vent",
	});
}

export default Component;
