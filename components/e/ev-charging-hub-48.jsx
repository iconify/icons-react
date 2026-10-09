import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4fy6acsx.css';
import '../../css/b/bu7pjbvso.css';
import '../../css/h/h9uc7tbsz.css';
import '../../css/g/gj478sbzc.css';
import '../../css/b/b8z332bko.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4fy6acsx"/><path class="bu7pjbvso"/><path class="h9uc7tbsz"/><path class="gj478sbzc"/><path class="b8z332bko"/>`,
		"fallback": "energy-icons:ev-charging-hub-48",
	});
}

export default Component;
