import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ymyxtyy4a.css';
import '../../css/j/je6okbb5z.css';
import '../../css/r/rcz-smdjy.css';
import '../../css/x/xw85vjb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ymyxtyy4a"/><path class="je6okbb5z wm-a"/><path class="rcz-smdjy wm-a"/><path class="xw85vjb7b"/></g>`,
		"fallback": "withicons:cloud-sun-duo",
	});
}

export default Component;
