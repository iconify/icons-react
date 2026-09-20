import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwdf5sbkv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iwdf5sbkv"/>`,
		"fallback": "streamline-flex:dice-5-remix",
	});
}

export default Component;
