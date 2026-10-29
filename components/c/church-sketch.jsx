import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jkalrsb_r.css';
import '../../css/x/x998uibqq.css';
import '../../css/n/np6xvcb3n.css';
import '../../css/c/cewdoibek.css';
import '../../css/n/n_jnoxbmg.css';
import '../../css/v/vsqgnc0jq.css';
import '../../css/g/gmc58-bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jkalrsb_r"/><path class="wm-k x998uibqq"/><path class="np6xvcb3n wm-a"/><path class="cewdoibek wm-s"/><path class="n_jnoxbmg wm-k"/><path class="vsqgnc0jq wm-a"/><path class="gmc58-bid wm-s"/></g>`,
		"fallback": "withicons:church-sketch",
	});
}

export default Component;
