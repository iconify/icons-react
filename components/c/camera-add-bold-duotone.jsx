import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxxr0xdbr.css';
import '../../css/g/ghd9kjblg.css';
import '../../css/z/z9kgvgb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xxxr0xdbr"/><path clip-rule="evenodd" class="ghd9kjblg"/><path class="z9kgvgb1l"/>`,
		"fallback": "solar:camera-add-bold-duotone",
	});
}

export default Component;
