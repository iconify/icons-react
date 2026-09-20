import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/leug8r77a.css';
import '../../css/u/uhh4ro0fa.css';
import '../../css/q/q3s80hbkp.css';
import '../../css/h/hvorckymi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="leug8r77a"/><path class="uhh4ro0fa"/><path clip-rule="evenodd" class="q3s80hbkp"/><path class="hvorckymi"/></g>`,
		"fallback": "streamline-sharp-color:fortune-telling-sphere-flat",
	});
}

export default Component;
