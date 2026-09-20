import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rbpmfzz7c.css';
import '../../css/m/mryjlfbzm.css';
import '../../css/d/dj2e535im.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rbpmfzz7c"/><path class="mryjlfbzm"/><path class="dj2e535im"/></g>`,
		"fallback": "streamline-freehand-color:e-commerce-add-basket-cloud",
	});
}

export default Component;
