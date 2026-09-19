import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxbiylbvh.css';
import '../../css/a/afnh3eg2a.css';
import '../../css/o/onw483rpz.css';
import '../../css/u/uj0djj1qw.css';
import '../../css/p/pgi2lcabh.css';
import '../../css/o/osn__dbws.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uxbiylbvh"/><path class="afnh3eg2a"/><path class="onw483rpz"/><path class="uj0djj1qw"/><path class="pgi2lcabh"/><path class="osn__dbws"/>`,
		"fallback": "fxemoji:bunnyside",
	});
}

export default Component;
