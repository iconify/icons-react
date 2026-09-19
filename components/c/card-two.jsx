import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/ppdtzcciw.css';
import '../../css/n/nrgoqkb6n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ppdtzcciw"/><path class="nrgoqkb6n"/></g>`,
		"fallback": "icon-park:card-two",
	});
}

export default Component;
