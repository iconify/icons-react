import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_z9o5mag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_z9o5mag"/>`,
		"fallback": "streamline-logos:elixir-logo-solid",
	});
}

export default Component;
