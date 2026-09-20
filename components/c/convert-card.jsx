import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dxcqicbbo.css';
import '../../css/l/lbvil20dt.css';
import '../../css/l/l6umjrccz.css';
import '../../css/m/m598ti66d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dxcqicbbo"/><path class="lbvil20dt"/><path class="l6umjrccz"/><path class="m598ti66d"/></g>`,
		"fallback": "reicon:convert-card",
	});
}

export default Component;
