import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee3miprbq.css';
import '../../css/y/yjr4r8bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee3miprbq"/><path class="yjr4r8bte"/>`,
		"fallback": "mage:inbox-check-fill",
	});
}

export default Component;
