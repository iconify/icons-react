import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnjkukbmw.css';
import '../../css/o/ozisc9lak.css';
import '../../css/w/waeycxb3h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnjkukbmw"/><path class="ozisc9lak"/><path class="waeycxb3h"/>`,
		"fallback": "energy-icons:carbon-offset-20",
	});
}

export default Component;
