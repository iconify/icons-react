import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l24eq7b1k.css';
import '../../css/g/gyvowbb7z.css';
import '../../css/q/qzdx_s0vk.css';
import '../../css/j/jl-543bif.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="l24eq7b1k"/><path class="gyvowbb7z"/><path class="qzdx_s0vk"/><path class="jl-543bif"/></g>`,
		"fallback": "icon-park-solid:honey",
	});
}

export default Component;
