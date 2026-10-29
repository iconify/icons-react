import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n6cy9hz8y.css';
import '../../css/f/fr25ybbad.css';
import '../../css/h/h6orqybed.css';
import '../../css/o/o3d4k3blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n6cy9hz8y"/><path class="fr25ybbad"/><path class="h6orqybed wm-a"/><path class="o3d4k3blk wm-k"/></g>`,
		"fallback": "withicons:files-sketch",
	});
}

export default Component;
