import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jcdecwuae.css';
import '../../css/o/oj3803_hd.css';
import '../../css/i/iqq2vmbxj.css';
import '../../css/w/wfhc3lbdr.css';
import '../../css/s/s5z7pmbtv.css';
import '../../css/s/siruncj6z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="jcdecwuae"/><path class="oj3803_hd"/><path class="iqq2vmbxj"/><path class="wfhc3lbdr"/><path class="s5z7pmbtv"/><path class="siruncj6z"/></g>`,
		"fallback": "icon-park:goblet-full",
	});
}

export default Component;
