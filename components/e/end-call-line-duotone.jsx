import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lvj7pdg0l.css';
import '../../css/d/daesvybit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lvj7pdg0l"/><path class="daesvybit"/></g>`,
		"fallback": "solar:end-call-line-duotone",
	});
}

export default Component;
