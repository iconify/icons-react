import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/obae7nbwo.css';
import '../../css/s/s711xbczi.css';
import '../../css/k/kkztns4vk.css';
import '../../css/l/l7umh3bwe.css';
import '../../css/n/nj6yhupln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="obae7nbwo"/><path class="s711xbczi"/><path class="kkztns4vk wm-shine"/><path class="l7umh3bwe wm-k"/><path class="nj6yhupln wm-a"/></g>`,
		"fallback": "withicons-kawaii:calculator",
	});
}

export default Component;
