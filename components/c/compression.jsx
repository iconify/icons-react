import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/o/oj-_r_7vf.css';
import '../../css/q/q9_jgnz7k.css';
import '../../css/l/l2mnc5w_w.css';
import '../../css/z/zrqu0o63l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzxnoJTzD"><g class="hv130ab-t"><path class="oj-_r_7vf"/><path class="q9_jgnz7k"/><path class="l2mnc5w_w"/><path class="zrqu0o63l"/></g></mask></defs><path mask="url(#SVGzxnoJTzD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:compression",
	});
}

export default Component;
