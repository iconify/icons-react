import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3uosq4ww.css';
import '../../css/z/zwrp4pohh.css';
import '../../css/w/wuhl7gboj.css';
import '../../css/h/hxvb9mb0v.css';
import '../../css/d/dkolos56f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3uosq4ww"/><path class="zwrp4pohh"/><path class="wuhl7gboj"/><path class="hxvb9mb0v"/><path clip-rule="evenodd" class="dkolos56f"/>`,
		"fallback": "token:earn",
	});
}

export default Component;
