import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zen2agbyu.css';
import '../../css/t/ty9mbj_-y.css';
import '../../css/m/me9i_ernp.css';
import '../../css/t/t5pe0rbpg.css';
import '../../css/h/hxd-si7bb.css';
import '../../css/s/s426uxbfb.css';
import '../../css/t/t3xbxgbre.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zen2agbyu"/><path class="ty9mbj_-y"/><path class="me9i_ernp"/><path class="t5pe0rbpg"/><path class="hxd-si7bb"/><path class="s426uxbfb"/><path class="t3xbxgbre"/>`,
		"fallback": "energy-icons:aperture-48",
	});
}

export default Component;
