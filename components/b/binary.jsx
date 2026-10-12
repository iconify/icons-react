import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uk-7xnb5f.css';
import '../../css/u/u4qfdrb5f.css';
import '../../css/v/vt3udxajo.css';
import '../../css/o/ogs1xppyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="uk-7xnb5f"/><rect class="u4qfdrb5f"/><rect class="vt3udxajo"/><path class="ogs1xppyb"/></g>`,
		"fallback": "andrsrxn:binary",
	});
}

export default Component;
