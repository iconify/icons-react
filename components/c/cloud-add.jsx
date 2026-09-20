import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dn9_0uvcp.css';
import '../../css/q/q8y8mzbgx.css';
import '../../css/o/oq8v77b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dn9_0uvcp"/><path class="q8y8mzbgx"/><path class="oq8v77b3a"/></g>`,
		"fallback": "reicon:cloud-add",
	});
}

export default Component;
