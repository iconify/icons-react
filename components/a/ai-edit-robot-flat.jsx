import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tzy_pd90l.css';
import '../../css/u/ua78apbcf.css';
import '../../css/f/fjm43zboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tzy_pd90l"/><path class="ua78apbcf"/><path class="fjm43zboa"/></g>`,
		"fallback": "streamline-sharp-color:ai-edit-robot-flat",
	});
}

export default Component;
