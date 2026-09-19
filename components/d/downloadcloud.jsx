import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtr2jecan.css';
import '../../css/y/yt81ngblg.css';
import '../../css/f/fkatt9b7g.css';

const viewBox = {"width":16,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtr2jecan"/><path class="yt81ngblg"/><path class="fkatt9b7g"/>`,
		"fallback": "formkit:downloadcloud",
	});
}

export default Component;
