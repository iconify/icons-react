import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/rq-pdnbgd.css';
import '../../css/k/kc7k11b7s.css';
import '../../css/p/pho2bqbtn.css';
import '../../css/e/ecnmmgqom.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="rq-pdnbgd"/><path class="kc7k11b7s"/><path class="pho2bqbtn"/><path class="ecnmmgqom"/></g>`,
		"fallback": "icon-park:guide-board",
	});
}

export default Component;
