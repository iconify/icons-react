import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er09-obpj.css';
import '../../css/w/w_8qokj7u.css';
import '../../css/k/ku79fqbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="er09-obpj"/><path class="w_8qokj7u"/><path clip-rule="evenodd" class="ku79fqbff"/>`,
		"fallback": "solar:dropper-3-outline",
	});
}

export default Component;
