import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go9655bbx.css';
import '../../css/y/yqefc5upf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="go9655bbx"/><circle class="yqefc5upf"/>`,
		"fallback": "garden:decimal-fill-12",
	});
}

export default Component;
