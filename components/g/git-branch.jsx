import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x8h-3achn.css';
import '../../css/d/dd0q7x9uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x8h-3achn"/><path class="dd0q7x9uq"/></g>`,
		"fallback": "iconoir:git-branch",
	});
}

export default Component;
