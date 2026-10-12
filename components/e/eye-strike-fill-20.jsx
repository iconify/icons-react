import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl8wlmp8e.css';
import '../../css/s/sflf_gome.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl8wlmp8e"/><path class="sflf_gome"/>`,
		"fallback": "garden:eye-strike-fill-20",
	});
}

export default Component;
