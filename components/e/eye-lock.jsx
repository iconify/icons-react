import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwavribgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwavribgs"/>`,
		"fallback": "noviair-light:eye-lock",
	});
}

export default Component;
