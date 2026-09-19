import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr3dzbb9y.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr3dzbb9y"/>`,
		"fallback": "fluent-mdl2:combine",
	});
}

export default Component;
