import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6dd8jb9u.css';
import '../../css/f/fsk9461bq.css';
import '../../css/n/nf5sa9buz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6dd8jb9u"/><path class="fsk9461bq"/><path class="nf5sa9buz"/>`,
		"fallback": "energy-icons:gift-card-20-bold",
	});
}

export default Component;
