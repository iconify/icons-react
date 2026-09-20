import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b8p5vjk7k.css';
import '../../css/n/n4wmd7tdc.css';
import '../../css/d/duywhdcwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b8p5vjk7k"/><path class="n4wmd7tdc"/><path class="duywhdcwe"/></g>`,
		"fallback": "tabler:building-airport",
	});
}

export default Component;
