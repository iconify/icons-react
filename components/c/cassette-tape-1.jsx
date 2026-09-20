import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdw8jccgb.css';
import '../../css/n/nvzlklb-t.css';
import '../../css/b/bqme1cbrd.css';
import '../../css/k/kzplcmzam.css';
import '../../css/e/eqqizn7qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tdw8jccgb"/><path class="nvzlklb-t"/><path class="bqme1cbrd"/><path class="kzplcmzam"/><path class="eqqizn7qf"/></g>`,
		"fallback": "streamline-cyber-color:cassette-tape-1",
	});
}

export default Component;
