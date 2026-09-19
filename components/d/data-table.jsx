import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za5ojpbbz.css';
import '../../css/t/tdrcj_yxq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za5ojpbbz"/><path class="tdrcj_yxq"/>`,
		"fallback": "carbon:data-table",
	});
}

export default Component;
