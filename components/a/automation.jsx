import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fih1jvc2u.css';
import '../../css/l/lgevicgqz.css';
import '../../css/y/ysv--kbzy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fih1jvc2u"/><path class="lgevicgqz"/><path class="ysv--kbzy"/>`,
		"fallback": "vaadin:automation",
	});
}

export default Component;
