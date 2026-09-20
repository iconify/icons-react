import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jtzqtmbpa.css';
import '../../css/x/xv2mki75f.css';
import '../../css/x/x2vknkufc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="jtzqtmbpa"/><circle class="xv2mki75f"/><path class="x2vknkufc"/></g>`,
		"fallback": "proicons:cart",
	});
}

export default Component;
