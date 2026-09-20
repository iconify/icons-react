import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hha2vm2py.css';
import '../../css/d/dxvormbsv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hha2vm2py"/><path class="dxvormbsv"/>`,
		"fallback": "material-icon-theme:folder-contract-open",
	});
}

export default Component;
