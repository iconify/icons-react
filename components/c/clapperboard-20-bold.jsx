import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh8z6bbpj.css';
import '../../css/k/kpsumujvs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh8z6bbpj"/><path class="kpsumujvs"/>`,
		"fallback": "energy-icons:clapperboard-20-bold",
	});
}

export default Component;
