import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q4bj7xbuk.css';
import '../../css/w/wwi2rp7cw.css';
import '../../css/s/s8iooiy8o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="q4bj7xbuk"/><path class="wwi2rp7cw"/><circle class="s8iooiy8o"/></g>`,
		"fallback": "icon-park-outline:file-music",
	});
}

export default Component;
