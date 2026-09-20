import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvymobzlx.css';
import '../../css/a/ahbiwo_gy.css';
import '../../css/s/sb0jxv7-w.css';
import '../../css/o/omaec45yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvymobzlx"/><path class="ahbiwo_gy"/><path class="sb0jxv7-w"/><path class="omaec45yu"/></g>`,
		"fallback": "reicon:archive4",
	});
}

export default Component;
