import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyvesm5kl.css';
import '../../css/c/c19d1kbnv.css';
import '../../css/n/njpuimyto.css';
import '../../css/d/dw998jgwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pyvesm5kl"/><path class="c19d1kbnv"/><path class="njpuimyto"/><path class="dw998jgwv"/></g>`,
		"fallback": "andrsrxn:bread",
	});
}

export default Component;
