import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-th10mjr.css';
import '../../css/r/rndt691qq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-th10mjr"/><path class="rndt691qq"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-film-roll",
	});
}

export default Component;
