import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/k44k9dbgn.css';
import '../../css/z/zqqnr6bwj.css';
import '../../css/p/piddrd77s.css';
import '../../css/o/o7olhjb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="k44k9dbgn"/><path class="zqqnr6bwj"/><path class="piddrd77s"/><path class="o7olhjb9n"/></g>`,
		"fallback": "streamline-cyber:bank-notes-stack",
	});
}

export default Component;
