import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bnfkuob9z.css';
import '../../css/e/e47brrtau.css';
import '../../css/q/qjlf-cc6l.css';
import '../../css/l/lxqch5bjp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="bnfkuob9z"/><path class="e47brrtau"/><path class="qjlf-cc6l"/><path class="lxqch5bjp"/></g>`,
		"fallback": "icon-park:file-text-one",
	});
}

export default Component;
