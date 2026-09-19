import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/l/leg1kmbwy.css';
import '../../css/g/ghilmzbaa.css';
import '../../css/x/xa49xybwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="leg1kmbwy"/><path class="ghilmzbaa"/><path class="xa49xybwk"/></g>`,
		"fallback": "icon-park-outline:align-left-one",
	});
}

export default Component;
