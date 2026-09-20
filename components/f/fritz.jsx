import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a72uze7-g.css';
import '../../css/c/cm8ojeb9d.css';
import '../../css/u/uboxyudmy.css';
import '../../css/x/xp4b6fbxp.css';
import '../../css/v/vsu_nfuco.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a72uze7-g"/><path class="cm8ojeb9d"/><path class="uboxyudmy"/><path class="xp4b6fbxp"/><path class="vsu_nfuco"/>`,
		"fallback": "selfhst:fritz",
	});
}

export default Component;
