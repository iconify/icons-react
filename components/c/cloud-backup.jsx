import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pivljsfnt.css';
import '../../css/h/h_wxr0mdx.css';
import '../../css/f/f4goptban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pivljsfnt"/><path class="h_wxr0mdx"/><path class="f4goptban"/></g>`,
		"fallback": "lucide:cloud-backup",
	});
}

export default Component;
