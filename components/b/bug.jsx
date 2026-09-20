import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wokxgeiag.css';
import '../../css/o/o0o5s781i.css';
import '../../css/h/hnl9frb8u.css';
import '../../css/z/z0qkcfgxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wokxgeiag"/><path class="o0o5s781i"/><path class="hnl9frb8u"/><path class="z0qkcfgxw"/></g>`,
		"fallback": "streamline-sharp-color:bug",
	});
}

export default Component;
