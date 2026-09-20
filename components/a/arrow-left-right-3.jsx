import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swa1uqbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swa1uqbat"/>`,
		"fallback": "tdesign:arrow-left-right-3",
	});
}

export default Component;
