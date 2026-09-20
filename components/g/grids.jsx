import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxnk6c03f.css';
import '../../css/n/n47i0wbat.css';
import '../../css/k/ke_ofwcml.css';
import '../../css/t/t1ote7hfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxnk6c03f"/><path class="n47i0wbat"/><path class="ke_ofwcml"/><path class="t1ote7hfs"/>`,
		"fallback": "uim:grids",
	});
}

export default Component;
