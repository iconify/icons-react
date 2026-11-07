import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z671n4b7f.css';
import '../../css/o/o9b3pqbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z671n4b7f"/><path class="o9b3pqbor"/>`,
		"fallback": "solar:download-bold",
	});
}

export default Component;
