import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye-jbqbha.css';
import '../../css/f/fzplxusck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye-jbqbha"/><path clip-rule="evenodd" class="fzplxusck"/>`,
		"fallback": "bitcoin-icons:credit-card-filled",
	});
}

export default Component;
