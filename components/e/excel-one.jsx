import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/o/o5i_ci7js.css';
import '../../css/z/zraqpcbts.css';
import '../../css/w/w8tnpgblz.css';
import '../../css/v/vuc6h4bcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="xhdah4bbl"/><path class="o5i_ci7js"/><path class="zraqpcbts"/><path class="w8tnpgblz"/><path class="vuc6h4bcn"/></g>`,
		"fallback": "icon-park:excel-one",
	});
}

export default Component;
