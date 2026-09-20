import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmunasb2f.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/mnr4ubw3e.css';
import '../../css/f/fzydk7e5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmunasb2f"/><g class="xtpeb-edw"><path clip-rule="evenodd" class="mnr4ubw3e"/><path class="fzydk7e5i"/></g>`,
		"fallback": "stash:calendar-star-duotone",
	});
}

export default Component;
