import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/opwjjacwm.css';
import '../../css/h/hwjqvwb3f.css';
import '../../css/q/qsbu6rbuo.css';
import '../../css/u/uuktc0b9x.css';
import '../../css/b/bcaq6ej0k.css';
import '../../css/w/wfos73cfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="opwjjacwm"/><path class="hwjqvwb3f"/><circle class="qsbu6rbuo"/><circle class="uuktc0b9x"/><circle class="bcaq6ej0k"/><circle class="wfos73cfp"/></g>`,
		"fallback": "lucide:brain-circuit",
	});
}

export default Component;
