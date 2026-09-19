import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ihx13lw_h.css';
import '../../css/f/f2oh-bcek.css';
import '../../css/s/spz57yl-a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ihx13lw_h"/><path class="f2oh-bcek"/><path class="spz57yl-a"/></g>`,
		"fallback": "icon-park:eeg",
	});
}

export default Component;
