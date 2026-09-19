import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/t/tj4iztb1z.css';
import '../../css/i/io705ubmj.css';
import '../../css/k/ko3epyyfu.css';
import '../../css/b/bsmxqbbmj.css';
import '../../css/h/hs4b-epkr.css';
import '../../css/o/opmus8fye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="tj4iztb1z"/><path class="io705ubmj"/><path class="ko3epyyfu"/><path class="bsmxqbbmj"/><path class="hs4b-epkr"/><path class="opmus8fye"/></g>`,
		"fallback": "icon-park:click-tap",
	});
}

export default Component;
