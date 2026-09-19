import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kxce0pcdg.css';
import '../../css/g/ghexmyv8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kxce0pcdg"/><path class="ghexmyv8a"/></g>`,
		"fallback": "iconoir:align-bottom-box-solid",
	});
}

export default Component;
