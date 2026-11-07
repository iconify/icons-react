import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpv5vhdla.css';
import '../../css/e/epahso09d.css';
import '../../css/t/tzfojlecs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpv5vhdla"/><path class="epahso09d"/><path class="tzfojlecs"/>`,
		"fallback": "solar:info-circle-bold-duotone",
	});
}

export default Component;
