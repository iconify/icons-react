import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lweui9bhw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lweui9bhw"/>`,
		"fallback": "devicon-plain:elixir",
	});
}

export default Component;
