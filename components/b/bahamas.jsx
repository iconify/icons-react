import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7t93nb3i.css';
import '../../css/q/qu8iegbod.css';
import '../../css/g/g7-s2nbhk.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7t93nb3i"/><path class="qu8iegbod"/><path class="g7-s2nbhk"/>`,
		"fallback": "tabler-flags:bahamas",
	});
}

export default Component;
