import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlo9kcbps.css';
import '../../css/w/w3uwt-m7u.css';
import '../../css/n/ncmae9omk.css';
import '../../css/n/n200guugx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlo9kcbps"/><path class="w3uwt-m7u"/><path class="ncmae9omk"/><path class="n200guugx"/>`,
		"fallback": "energy-icons:chalet-48",
	});
}

export default Component;
