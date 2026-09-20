import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/gxn8twyqa.css';
import '../../css/d/d7osp4bfk.css';
import '../../css/m/mxi5jcbic.css';
import '../../css/m/mn28g2iaz.css';
import '../../css/p/pb2k0fqbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="gxn8twyqa"/><path class="d7osp4bfk"/><path class="mxi5jcbic"/><path class="mn28g2iaz"/><path class="pb2k0fqbp"/></g>`,
		"fallback": "streamline-sharp-color:browser-key",
	});
}

export default Component;
