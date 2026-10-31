import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n6scesb8l.css';
import '../../css/q/qw263ib7p.css';
import '../../css/q/qwd_m61jb.css';
import '../../css/m/mvv-vwplq.css';
import '../../css/j/jkxkvzmrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n6scesb8l wm-shadow"/><path class="qw263ib7p wm-shadow"/><path class="qwd_m61jb"/><path class="mvv-vwplq"/><path class="jkxkvzmrl"/></g>`,
		"fallback": "withicons-brutal:fuel",
	});
}

export default Component;
