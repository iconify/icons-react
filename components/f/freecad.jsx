import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omitv2byq.css';
import '../../css/s/s6gb733yj.css';
import '../../css/g/g1kqfibni.css';
import '../../css/x/xy5e245oe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omitv2byq"/><path class="s6gb733yj"/><path class="g1kqfibni"/><path class="xy5e245oe"/>`,
		"fallback": "selfhst:freecad",
	});
}

export default Component;
