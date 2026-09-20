import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/f/fpplqm36s.css';
import '../../css/i/iw-i4sbah.css';
import '../../css/e/ehethac0h.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNwzqUXRl"><g class="ukm9jj2re"><path class="fpplqm36s"/><path class="iw-i4sbah"/><path class="ehethac0h"/></g></mask></defs><path mask="url(#SVGNwzqUXRl)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:box-alt-duotone",
	});
}

export default Component;
