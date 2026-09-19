import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/k/k0eackv-p.css';
import '../../css/c/cz2tyx1lz.css';
import '../../css/t/thkv8ksfx.css';
import '../../css/w/w46q43xdh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="k0eackv-p"/><path clip-rule="evenodd" class="cz2tyx1lz"/><path clip-rule="evenodd" class="thkv8ksfx"/><path clip-rule="evenodd" class="w46q43xdh"/></g>`,
		"fallback": "icon-park:circle-three",
	});
}

export default Component;
