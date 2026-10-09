import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z55jyj2un.css';
import '../../css/k/kndjxwbkd.css';
import '../../css/o/ol_xz9rkq.css';
import '../../css/z/ziqho5b-f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z55jyj2un"/><path class="kndjxwbkd"/><path class="ol_xz9rkq"/><path class="ziqho5b-f"/>`,
		"fallback": "energy-icons:cloud-plus-20-bold",
	});
}

export default Component;
