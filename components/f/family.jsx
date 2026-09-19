import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/um11cq07f.css';
import '../../css/e/e598ksbsp.css';
import '../../css/l/l6qkcxlox.css';
import '../../css/p/plcrscbzj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="um11cq07f"/><circle class="e598ksbsp"/><circle class="l6qkcxlox"/><circle class="plcrscbzj"/></g>`,
		"fallback": "icon-park-outline:family",
	});
}

export default Component;
