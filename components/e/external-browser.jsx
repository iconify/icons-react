import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk75-jb2c.css';
import '../../css/b/boxkj20aw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk75-jb2c"/><path class="boxkj20aw"/>`,
		"fallback": "vaadin:external-browser",
	});
}

export default Component;
