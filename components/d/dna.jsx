import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk_1psu1o.css';
import '../../css/g/gx-lz3vja.css';
import '../../css/d/dj2mub87f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk_1psu1o wm-a"/><path class="gx-lz3vja wm-k"/><path class="dj2mub87f wm-k"/>`,
		"fallback": "withicons-bauhaus:dna",
	});
}

export default Component;
