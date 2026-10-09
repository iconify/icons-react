import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1qo8c0hp.css';
import '../../css/j/jck9-oazd.css';
import '../../css/g/g0ni6vb5b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1qo8c0hp"/><path class="jck9-oazd"/><path class="g0ni6vb5b"/>`,
		"fallback": "energy-icons:beach-20",
	});
}

export default Component;
