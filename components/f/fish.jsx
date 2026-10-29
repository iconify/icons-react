import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bq6kxj32x.css';
import '../../css/f/fm32n2byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bq6kxj32x"/><path class="fm32n2byj wm-a"/></g>`,
		"fallback": "withicons:fish",
	});
}

export default Component;
