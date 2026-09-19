import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwhb9892x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwhb9892x"/>`,
		"fallback": "bx:crosshair",
	});
}

export default Component;
