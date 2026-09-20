import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nkhcm6v6w.css';
import '../../css/p/pdxdz28jj.css';
import '../../css/f/fod0vccza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="nkhcm6v6w"/><path class="pdxdz28jj"/><path class="fod0vccza"/></g>`,
		"fallback": "streamline-cyber:building-13",
	});
}

export default Component;
