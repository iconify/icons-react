import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s8e1sq_6r.css';
import '../../css/a/at8ghrwxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s8e1sq_6r"/><path class="at8ghrwxj"/></g>`,
		"fallback": "hugeicons:computer-phone-sync",
	});
}

export default Component;
