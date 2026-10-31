import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qpcdyh3mb.css';
import '../../css/n/nkpf7efpj.css';
import '../../css/p/pti_5hrpj.css';
import '../../css/y/yt-dqm53i.css';
import '../../css/t/to2gc3o4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qpcdyh3mb wm-shadow"/><path class="nkpf7efpj"/><path class="pti_5hrpj"/><path class="yt-dqm53i"/><path class="to2gc3o4w"/></g>`,
		"fallback": "withicons-retro:apple",
	});
}

export default Component;
