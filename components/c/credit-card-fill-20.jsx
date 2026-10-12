import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imywpub2v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imywpub2v"/>`,
		"fallback": "garden:credit-card-fill-20",
	});
}

export default Component;
