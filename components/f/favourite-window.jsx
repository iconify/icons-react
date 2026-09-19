import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjbttgbsa.css';
import '../../css/v/vzr9tvb2h.css';
import '../../css/z/zbbn00bvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rjbttgbsa"/><path class="vzr9tvb2h"/><path class="zbbn00bvs"/></g>`,
		"fallback": "iconoir:favourite-window",
	});
}

export default Component;
