import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia-bsglhw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia-bsglhw"/>`,
		"fallback": "pinhead:anguished-face-with-spots-in-circle",
	});
}

export default Component;
