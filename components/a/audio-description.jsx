import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba8_jhblq.css';

const viewBox = {"width":2304,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba8_jhblq"/>`,
		"fallback": "fa:audio-description",
	});
}

export default Component;
