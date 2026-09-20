import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6ihzrq4i.css';
import '../../css/b/b4e5mkbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v6ihzrq4i"/><path class="b4e5mkbeq"/></g>`,
		"fallback": "reicon:document-cloud",
	});
}

export default Component;
