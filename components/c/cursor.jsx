import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0_flzb5e.css';
import '../../css/l/l30p8_bao.css';
import '../../css/s/sw9z_vbda.css';
import '../../css/t/t0-v74dju.css';
import '../../css/r/rpmbmibwc.css';
import '../../css/u/uam_q-b5c.css';
import '../../css/a/ajto53bdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow x0_flzb5e"/><path class="l30p8_bao wm-k"/><path class="sw9z_vbda wm-k"/><path class="t0-v74dju wm-k"/><path class="rpmbmibwc wm-k"/><path class="uam_q-b5c wm-k"/><path class="ajto53bdc wm-shine"/>`,
		"fallback": "withicons-pastel:cursor",
	});
}

export default Component;
