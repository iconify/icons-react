import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmt52ebtu.css';
import '../../css/p/p5yzx8q3n.css';
import '../../css/c/chwz_fbhv.css';
import '../../css/p/pt-jrw7gj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kmt52ebtu"/><path clip-rule="evenodd" class="p5yzx8q3n"/><path class="chwz_fbhv"/><path class="pt-jrw7gj"/></g>`,
		"fallback": "streamline-flex-color:battery-charging",
	});
}

export default Component;
