import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/d/dj6gm4qjv.css';
import '../../css/p/pw2s73b4a.css';
import '../../css/s/swjdnjbbn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="dj6gm4qjv"/><path class="pw2s73b4a"/><path class="swjdnjbbn"/></g>`,
		"fallback": "icon-park-outline:copy-one",
	});
}

export default Component;
