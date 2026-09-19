import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-cigyqaj.css';
import '../../css/d/dmmzmkb4s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="o-cigyqaj"/><path class="dmmzmkb4s"/>`,
		"fallback": "carbon:ibm-cloud-virtual-server-vpc",
	});
}

export default Component;
