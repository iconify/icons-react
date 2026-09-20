import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh4423hht.css';
import '../../css/h/hezb7ebtf.css';
import '../../css/p/pdjh1hb7i.css';
import '../../css/p/p8n1gxb1t.css';
import '../../css/m/mw7rs_yrs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh4423hht"/><path class="hezb7ebtf"/><path class="pdjh1hb7i"/><path clip-rule="evenodd" class="p8n1gxb1t"/><path clip-rule="evenodd" class="mw7rs_yrs"/>`,
		"fallback": "material-icon-theme:folder-src-tauri-open",
	});
}

export default Component;
