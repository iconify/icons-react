import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr3nhqbhi.css';
import '../../css/h/hf81d2y0d.css';
import '../../css/q/qkpwe6b5c.css';
import '../../css/g/g0ni6vb5b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr3nhqbhi"/><path class="hf81d2y0d"/><path class="qkpwe6b5c"/><path class="g0ni6vb5b"/>`,
		"fallback": "energy-icons:forest-20",
	});
}

export default Component;
