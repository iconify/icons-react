import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_xknqb-h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_xknqb-h"/>`,
		"fallback": "streamline:entertainment-volume-up-volume-speaker-up-control-music-plus-add-audio-increase",
	});
}

export default Component;
