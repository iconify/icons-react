import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scn8kmb6b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scn8kmb6b"/>`,
		"fallback": "carbon:down-to-bottom",
	});
}

export default Component;
