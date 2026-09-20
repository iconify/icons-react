import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovhjtnbtq.css';
import '../../css/v/vm3bmsb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ovhjtnbtq"/><path class="vm3bmsb_i"/>`,
		"fallback": "streamline-logos:american-express-logo-solid",
	});
}

export default Component;
