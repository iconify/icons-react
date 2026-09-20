import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/p/phxdz-poi.css';
import '../../css/q/qx_a1cqbh.css';
import '../../css/t/t-c46r-6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="phxdz-poi"/><path class="qx_a1cqbh"/><path class="t-c46r-6c"/></g>`,
		"fallback": "streamline-cyber:control-next",
	});
}

export default Component;
