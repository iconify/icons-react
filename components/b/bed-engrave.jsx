import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dnhfhj4qr.css';
import '../../css/a/azhil-l4y.css';
import '../../css/g/ganinvb3m.css';
import '../../css/z/zpodnwj0o.css';
import '../../css/s/s37zulbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dnhfhj4qr wm-k"/><path class="azhil-l4y wm-a"/><path class="ganinvb3m wm-shadow"/><path class="wm-k zpodnwj0o"/><path class="s37zulbpr wm-a"/></g>`,
		"fallback": "withicons:bed-engrave",
	});
}

export default Component;
