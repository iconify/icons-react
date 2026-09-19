import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/msz60p3bx.css';
import '../../css/m/mp63jovjl.css';
import '../../css/k/kgmv5bb8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><circle class="msz60p3bx"/><circle class="mp63jovjl"/><path class="kgmv5bb8g"/></g>`,
		"fallback": "icon-park:gauze",
	});
}

export default Component;
