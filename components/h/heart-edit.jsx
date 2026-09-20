import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h92865b4u.css';
import '../../css/r/ruoobvlrj.css';
import '../../css/p/p552hfbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h92865b4u"/><path class="ruoobvlrj"/><path class="p552hfbgz"/></g>`,
		"fallback": "reicon:heart-edit",
	});
}

export default Component;
