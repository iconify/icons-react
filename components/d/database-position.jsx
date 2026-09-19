import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/f7k8k4bku.css';
import '../../css/l/l8n2f1bih.css';
import '../../css/a/af4alv-9w.css';
import '../../css/v/v9r__tesz.css';
import '../../css/z/zr246gf3b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="f7k8k4bku"/><path class="l8n2f1bih"/><path class="af4alv-9w"/><path class="v9r__tesz"/><path class="zr246gf3b"/></g>`,
		"fallback": "icon-park:database-position",
	});
}

export default Component;
