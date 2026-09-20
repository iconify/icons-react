import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/q/q5a2teajs.css';
import '../../css/o/o7l51rbax.css';
import '../../css/i/ituo-kbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><circle transform="rotate(-90 12 7)" class="q5a2teajs"/><circle transform="rotate(-90 12 12)" class="o7l51rbax"/><path class="ituo-kbtq"/></g>`,
		"fallback": "solar:bowling-line-duotone",
	});
}

export default Component;
