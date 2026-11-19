import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/my-ewj-jl.css';
import '../../css/u/uaiw1fbwq.css';
import '../../css/p/pp5ysobjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="my-ewj-jl"/><path class="uaiw1fbwq"/><path class="pp5ysobjg"/></g>`,
		"fallback": "andrsrxn:cloud-droplets",
	});
}

export default Component;
