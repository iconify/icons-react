import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/g/gnyjs2b3z.css';
import '../../css/b/bzbpokgxj.css';
import '../../css/z/zu54a344z.css';
import '../../css/o/ofxvx6fql.css';
import '../../css/t/t9f-x7six.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="gnyjs2b3z"/><path class="bzbpokgxj"/><path class="zu54a344z"/><path class="ofxvx6fql"/><path class="t9f-x7six"/></g>`,
		"fallback": "icon-park:hunting-gear",
	});
}

export default Component;
