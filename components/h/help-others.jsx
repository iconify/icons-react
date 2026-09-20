import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm6z8-b1f.css';
import '../../css/o/ooupgx_qs.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/j/j_s2rs0uj.css';
import '../../css/f/fo820vbyo.css';
import '../../css/o/oopw-epca.css';
import '../../css/o/oul9lccjt.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/a7v4racng.css';
import '../../css/n/nb5hprbtj.css';
import '../../css/j/jqd85obrl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm6z8-b1f"/><path class="ooupgx_qs"/><g class="x4u8pbwjc"><path class="j_s2rs0uj"/><circle class="fo820vbyo"/><circle class="oopw-epca"/><path class="oul9lccjt"/></g><g class="jn8qy4bru"><path class="a7v4racng"/><path class="nb5hprbtj"/><path class="jqd85obrl"/><circle class="fo820vbyo"/><circle class="oopw-epca"/></g>`,
		"fallback": "openmoji:help-others",
	});
}

export default Component;
