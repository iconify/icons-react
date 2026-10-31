import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g653zybxd.css';
import '../../css/b/bo-r-rb5p.css';
import '../../css/w/wzva3qf9w.css';
import '../../css/f/f5vnnmw2g.css';
import '../../css/n/nzvhm2bhf.css';
import '../../css/q/qg1yd_b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="g653zybxd wm-shadow"/><path class="bo-r-rb5p wm-shadow"/><path class="wzva3qf9w"/><path class="f5vnnmw2g"/><path class="nzvhm2bhf"/><path class="qg1yd_b0k"/></g>`,
		"fallback": "withicons-brutal:git-merge",
	});
}

export default Component;
