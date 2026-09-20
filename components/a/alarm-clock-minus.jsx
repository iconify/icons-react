import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z073sil2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z073sil2y"/>`,
		"fallback": "keyline-icons:alarm-clock-minus",
	});
}

export default Component;
