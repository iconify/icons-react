import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/euxpybc-u.css';
import '../../css/z/zcl772bhd.css';
import '../../css/y/yr_f-qwns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="euxpybc-u"/><path class="zcl772bhd"/><path class="yr_f-qwns"/></g>`,
		"fallback": "lucide-extended:git-pull-request-draft-duotone",
	});
}

export default Component;
