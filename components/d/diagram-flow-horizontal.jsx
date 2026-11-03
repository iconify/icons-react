import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rjl-osbit.css';
import '../../css/f/feh9g0bqf.css';
import '../../css/j/jmd8w56ud.css';
import '../../css/g/gvcn7xpex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rjl-osbit"/><rect class="feh9g0bqf"/><rect class="jmd8w56ud"/><rect class="gvcn7xpex"/></g>`,
		"fallback": "lucide:diagram-flow-horizontal",
	});
}

export default Component;
