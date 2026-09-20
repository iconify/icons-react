import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/e/e-aitgbuv.css';
import '../../css/o/otm091jdv.css';
import '../../css/n/n7dnrdbog.css';
import '../../css/y/yygslrbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="e-aitgbuv"/><path class="otm091jdv"/><path class="n7dnrdbog"/><path class="yygslrbkv"/></g>`,
		"fallback": "streamline-cyber:delivery-truck-5",
	});
}

export default Component;
