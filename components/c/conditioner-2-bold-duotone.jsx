import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9_1xi4pr.css';
import '../../css/a/anh277ned.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o9_1xi4pr"/><path class="anh277ned"/>`,
		"fallback": "solar:conditioner-2-bold-duotone",
	});
}

export default Component;
