import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/qp4gerb0r.css';
import '../../css/u/ue0lmc99t.css';
import '../../css/b/bbnvrh6uj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="qp4gerb0r"/><path class="ue0lmc99t"/><path class="bbnvrh6uj"/></g>`,
		"fallback": "icon-park:collect-laptop",
	});
}

export default Component;
