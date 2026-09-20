import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj19krb9a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj19krb9a"/>`,
		"fallback": "temaki:boat-rental",
	});
}

export default Component;
