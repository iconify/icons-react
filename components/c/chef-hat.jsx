import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a0dti7bqc.css';
import '../../css/f/fwf_u99xy.css';
import '../../css/g/gha0pub7f.css';
import '../../css/w/wut4osbiu.css';
import '../../css/f/fxvc4nrok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a0dti7bqc wm-shadow"/><path class="fwf_u99xy wm-shadow"/><path class="gha0pub7f"/><path class="wut4osbiu"/><path class="fxvc4nrok"/></g>`,
		"fallback": "withicons-brutal:chef-hat",
	});
}

export default Component;
