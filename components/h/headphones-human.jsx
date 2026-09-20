import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aitggjtuy.css';
import '../../css/g/g8i58htec.css';
import '../../css/i/ix-fez9nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aitggjtuy"/><path class="g8i58htec"/><path class="ix-fez9nl"/>`,
		"fallback": "streamline-freehand:headphones-human",
	});
}

export default Component;
