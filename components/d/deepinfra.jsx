import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-icjnfkk.css';
import '../../css/p/pslrgkb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-icjnfkk"/><path class="pslrgkb3x"/>`,
		"fallback": "thesvg-color:deepinfra",
	});
}

export default Component;
