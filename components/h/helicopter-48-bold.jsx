import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tomb__uya.css';
import '../../css/v/vd19ejbdy.css';
import '../../css/f/fs7__xl7e.css';
import '../../css/x/xw6ho4bxz.css';
import '../../css/v/vq3mlfbcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tomb__uya"/><path class="vd19ejbdy"/><path class="fs7__xl7e"/><path class="xw6ho4bxz"/><path class="vq3mlfbcq"/>`,
		"fallback": "energy-icons:helicopter-48-bold",
	});
}

export default Component;
