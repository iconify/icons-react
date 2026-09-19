import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag5m9z64z.css';
import '../../css/z/z5kljvobp.css';
import '../../css/i/iv0739boz.css';
import '../../css/y/ynuwzd5vq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag5m9z64z"/><path class="z5kljvobp"/><path class="iv0739boz"/><path class="ynuwzd5vq"/>`,
		"fallback": "flat-color-icons:filing-cabinet",
	});
}

export default Component;
