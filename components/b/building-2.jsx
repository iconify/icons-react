import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aa2hsw2fq.css';
import '../../css/s/spyz-bhkq.css';
import '../../css/f/fjfkz6bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aa2hsw2fq"/><path class="spyz-bhkq"/><path class="fjfkz6bwl"/></g>`,
		"fallback": "lucide:building-2",
	});
}

export default Component;
