import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v623fab7r.css';
import '../../css/r/rf6pcbf9p.css';
import '../../css/z/zckikywai.css';
import '../../css/w/w03conbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v623fab7r"/><circle class="rf6pcbf9p"/><circle class="zckikywai"/><circle class="w03conbye"/></g>`,
		"fallback": "reicon:grid-circle-plus",
	});
}

export default Component;
