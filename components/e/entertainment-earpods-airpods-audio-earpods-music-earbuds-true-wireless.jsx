import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okwossb3c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okwossb3c"/>`,
		"fallback": "streamline:entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless",
	});
}

export default Component;
