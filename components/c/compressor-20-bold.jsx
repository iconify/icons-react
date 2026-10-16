import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj6o68bgt.css';
import '../../css/w/wcxlfdb-u.css';
import '../../css/b/bi2qc8bls.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj6o68bgt"/><path class="wcxlfdb-u"/><path class="bi2qc8bls"/>`,
		"fallback": "energy-icons:compressor-20-bold",
	});
}

export default Component;
