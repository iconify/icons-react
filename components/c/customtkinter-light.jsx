import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eodt7db1b.css';
import '../../css/k/ktds5bh2x.css';
import '../../css/n/n5qhtjs0s.css';
import '../../css/h/hedn4ccbe.css';
import '../../css/b/b_ohrogiw.css';
import '../../css/i/iylf7nbgr.css';
import '../../css/a/ahheqda7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9hXDtcqW"><rect class="eodt7db1b"/><rect class="ktds5bh2x"/></mask></defs><g mask="url(#SVG9hXDtcqW)"><path class="n5qhtjs0s"/><path class="hedn4ccbe"/><path class="b_ohrogiw"/><circle class="iylf7nbgr"/><circle class="ahheqda7s"/></g>`,
		"fallback": "thesvg-color:customtkinter-light",
	});
}

export default Component;
