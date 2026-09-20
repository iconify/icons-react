import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5_gewb3i.css';
import '../../css/s/sixi-whom.css';
import '../../css/p/p68rrab7a.css';
import '../../css/i/irzzjrgqm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k5_gewb3i"/><path clip-rule="evenodd" class="sixi-whom"/><path clip-rule="evenodd" class="p68rrab7a"/><path clip-rule="evenodd" class="irzzjrgqm"/></g>`,
		"fallback": "streamline-color:bus-flat",
	});
}

export default Component;
