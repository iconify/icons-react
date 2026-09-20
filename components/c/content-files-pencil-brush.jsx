import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-z9gacxo.css';
import '../../css/i/ifoz_0z4w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-z9gacxo"/><path class="ifoz_0z4w"/>`,
		"fallback": "streamline-pixel:content-files-pencil-brush",
	});
}

export default Component;
