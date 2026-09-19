import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bnfkuob9z.css';
import '../../css/a/ab_iu9unb.css';
import '../../css/o/ol7y7wbtn.css';
import '../../css/l/lxqch5bjp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="bnfkuob9z"/><path class="ab_iu9unb"/><path class="ol7y7wbtn"/><path class="lxqch5bjp"/></g>`,
		"fallback": "icon-park:file-failed-one",
	});
}

export default Component;
