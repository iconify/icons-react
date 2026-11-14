import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zvfyfdbdi.css';
import '../../css/t/themptbtt.css';
import '../../css/u/uwm7z1qdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="zvfyfdbdi"/><rect class="themptbtt"/><path class="uwm7z1qdj"/></g>`,
		"fallback": "evicons:card-terminal",
	});
}

export default Component;
