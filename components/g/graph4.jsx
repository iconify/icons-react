import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/muapvqbke.css';
import '../../css/i/ihvi8osrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="muapvqbke"/><path class="ihvi8osrw"/></g>`,
		"fallback": "reicon:graph4",
	});
}

export default Component;
