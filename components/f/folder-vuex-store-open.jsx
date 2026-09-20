import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-qxuibhr.css';
import '../../css/l/lxtaj1b-t.css';
import '../../css/t/tx-n4du-f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-qxuibhr"/><path class="lxtaj1b-t"/><path class="tx-n4du-f"/>`,
		"fallback": "material-icon-theme:folder-vuex-store-open",
	});
}

export default Component;
