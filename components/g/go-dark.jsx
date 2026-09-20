import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx5d-bc1s.css';
import '../../css/h/hvfmwi7nn.css';
import '../../css/g/gmsdegu5l.css';

const viewBox = {"width":207,"height":78};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nx5d-bc1s"><path class="hvfmwi7nn"/><path class="gmsdegu5l"/></g>`,
		"fallback": "thesvg-color:go-dark",
	});
}

export default Component;
