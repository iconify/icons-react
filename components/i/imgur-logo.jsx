import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/i/is4inccph.css';
import '../../css/m/moltzsezm.css';
import '../../css/c/curecacmn.css';
import '../../css/c/c67e73b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="is4inccph"/><path class="moltzsezm"/><path class="curecacmn"/><path class="c67e73b9s"/></g>`,
		"fallback": "streamline-logos:imgur-logo",
	});
}

export default Component;
