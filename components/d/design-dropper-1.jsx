import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru1pniv2i.css';
import '../../css/l/lluucabrf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru1pniv2i"/><path class="lluucabrf"/>`,
		"fallback": "streamline-pixel:design-dropper-1",
	});
}

export default Component;
