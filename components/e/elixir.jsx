import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk_5x50tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk_5x50tb"/>`,
		"fallback": "material-icon-theme:elixir",
	});
}

export default Component;
