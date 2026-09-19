import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/xnjspeamt.css';
import '../../css/k/k8_sv1isi.css';
import '../../css/b/bfx1hxjol.css';
import '../../css/k/kzqq8mwzb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="xnjspeamt"/><path class="k8_sv1isi"/><path class="bfx1hxjol"/><path class="kzqq8mwzb"/></g>`,
		"fallback": "icon-park:hourglass-null",
	});
}

export default Component;
