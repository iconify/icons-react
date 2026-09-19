import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/c/c9qbd5mne.css';
import '../../css/e/e_ogubqit.css';
import '../../css/s/s5akr8asl.css';
import '../../css/m/mvfr00str.css';
import '../../css/i/id_xf3bkj.css';
import '../../css/f/fyodjyjif.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="c9qbd5mne"/><path class="e_ogubqit"/><path class="s5akr8asl"/><path class="mvfr00str"/><path class="id_xf3bkj"/><path class="fyodjyjif"/></g>`,
		"fallback": "icon-park:dome",
	});
}

export default Component;
