import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ylumxzbka.css';
import '../../css/p/pw7txxbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ylumxzbka"/><path class="pw7txxbhg"/></g>`,
		"fallback": "tabler:brand-codepen",
	});
}

export default Component;
