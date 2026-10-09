import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic7c4od3i.css';
import '../../css/a/akg87ebjx.css';
import '../../css/u/u4as3jk4r.css';
import '../../css/t/t2b-glb-m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic7c4od3i"/><path class="akg87ebjx"/><path class="u4as3jk4r"/><path class="t2b-glb-m"/>`,
		"fallback": "energy-icons:carbon-storage-20",
	});
}

export default Component;
