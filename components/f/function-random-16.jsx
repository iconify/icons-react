import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9fuv28jy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g9fuv28jy"/>`,
		"fallback": "qlementine-icons:function-random-16",
	});
}

export default Component;
