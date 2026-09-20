import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fozui9hfo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fozui9hfo"/>`,
		"fallback": "devicon-plain:elixir-wordmark",
	});
}

export default Component;
