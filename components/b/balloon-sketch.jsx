import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a4k33ccyu.css';
import '../../css/d/dbt0womht.css';
import '../../css/e/eyae61b2f.css';
import '../../css/p/pipsvs8ca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a4k33ccyu"/><path class="dbt0womht wm-a"/><path class="eyae61b2f wm-k"/><path class="pipsvs8ca wm-a"/></g>`,
		"fallback": "withicons:balloon-sketch",
	});
}

export default Component;
