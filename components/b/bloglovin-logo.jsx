import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/r4d0bibcg.css';
import '../../css/j/j6s535awd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="r4d0bibcg"/><path clip-rule="evenodd" class="j6s535awd"/></g>`,
		"fallback": "streamline-logos:bloglovin-logo",
	});
}

export default Component;
