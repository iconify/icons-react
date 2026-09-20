import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zujkk5zci.css';
import '../../css/e/etr_cu8yu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zujkk5zci"/><path class="etr_cu8yu"/>`,
		"fallback": "qlementine-icons:gamepad-button-left-16",
	});
}

export default Component;
