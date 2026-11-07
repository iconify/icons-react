import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvnq9o5sc.css';
import '../../css/s/slns-v7tw.css';
import '../../css/t/tawubeb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvnq9o5sc"/><path class="slns-v7tw"/><path clip-rule="evenodd" class="tawubeb5f"/>`,
		"fallback": "solar:camera-bold-duotone",
	});
}

export default Component;
