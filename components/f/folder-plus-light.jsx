import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m14-lebxp.css';
import '../../css/j/j84ijjsgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m14-lebxp"/><path clip-rule="evenodd" class="j84ijjsgw"/>`,
		"fallback": "stash:folder-plus-light",
	});
}

export default Component;
