import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g9bey28zn.css';
import '../../css/g/ga7h3iaeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g9bey28zn"/><path class="ga7h3iaeu"/></g>`,
		"fallback": "iconoir:color-wheel",
	});
}

export default Component;
