import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bnfkuob9z.css';
import '../../css/x/xu2e47b4e.css';
import '../../css/y/yrpt4zmlp.css';
import '../../css/l/lxqch5bjp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="bnfkuob9z"/><rect class="xu2e47b4e"/><path class="yrpt4zmlp"/><path class="lxqch5bjp"/></g>`,
		"fallback": "icon-park:file-lock-one",
	});
}

export default Component;
