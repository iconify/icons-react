import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v61fj93rq.css';
import '../../css/q/qnlua3bkh.css';
import '../../css/o/ooegspb2x.css';
import '../../css/n/n-_na7btp.css';
import '../../css/x/xw2wwkbgg.css';
import '../../css/i/ilg3vld8z.css';
import '../../css/y/yk6k18b4b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v61fj93rq"/><path class="qnlua3bkh"/><path class="ooegspb2x"/><path class="n-_na7btp"/><path class="xw2wwkbgg"/><path class="ilg3vld8z"/><path class="yk6k18b4b"/></g>`,
		"fallback": "fluent-emoji-flat:coat",
	});
}

export default Component;
