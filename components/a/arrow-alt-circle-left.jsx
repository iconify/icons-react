import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rslkvhswy.css';
import '../../css/u/ug_dfdboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rslkvhswy"/><path class="ug_dfdboc"/>`,
		"fallback": "pixel:arrow-alt-circle-left",
	});
}

export default Component;
