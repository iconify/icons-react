import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv_dau1cf.css';
import '../../css/m/mwsfceayy.css';
import '../../css/v/vra1g0c1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv_dau1cf wm-k"/><path class="mwsfceayy wm-k"/><path class="vra1g0c1t wm-a"/>`,
		"fallback": "withicons-bauhaus:file-pdf",
	});
}

export default Component;
