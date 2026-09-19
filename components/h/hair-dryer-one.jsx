import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/s_fep1eov.css';
import '../../css/f/fdc_qf35n.css';
import '../../css/a/arhzl8byt.css';
import '../../css/l/lps7apgwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="s_fep1eov"/><path class="fdc_qf35n"/><path class="arhzl8byt"/><circle class="lps7apgwl"/></g>`,
		"fallback": "icon-park-solid:hair-dryer-one",
	});
}

export default Component;
