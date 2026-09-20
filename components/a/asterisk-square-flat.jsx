import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mszq7jb9m.css';
import '../../css/w/w877d7bzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mszq7jb9m"/><path class="w877d7bzg"/></g>`,
		"fallback": "streamline-sharp-color:asterisk-square-flat",
	});
}

export default Component;
