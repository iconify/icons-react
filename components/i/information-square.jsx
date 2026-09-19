import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/b/b8twcu9qm.css';
import '../../css/y/y48rpdbyy.css';
import '../../css/v/v-zgfvbum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="b8twcu9qm"/><path class="y48rpdbyy"/><path class="v-zgfvbum"/></g>`,
		"fallback": "iconamoon:information-square",
	});
}

export default Component;
