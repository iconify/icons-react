import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlznsqbch.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vlznsqbch"/>`,
		"fallback": "streamline-flex:chef-toque-hat-remix",
	});
}

export default Component;
