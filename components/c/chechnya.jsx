import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksnmb0v6t.css';
import '../../css/y/ytckw3b9r.css';
import '../../css/l/lxia6g_nu.css';
import '../../css/o/ol-1x80it.css';
import '../../css/c/c8g8wzbbt.css';
import '../../css/q/q83zliwtp.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksnmb0v6t"/><path class="ytckw3b9r"/><path class="lxia6g_nu"/><path class="ol-1x80it"/><path class="c8g8wzbbt"/><path class="q83zliwtp"/>`,
		"fallback": "tabler-flags:chechnya",
	});
}

export default Component;
