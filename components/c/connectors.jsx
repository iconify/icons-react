import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw5wgw3nd.css';
import '../../css/u/u2bmd6bte.css';
import '../../css/v/vl6kuv2by.css';
import '../../css/s/s6c_7lb9q.css';
import '../../css/z/z7c3p7bxa.css';
import '../../css/r/rgs_dyyyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw5wgw3nd"/><path class="u2bmd6bte"/><path class="vl6kuv2by"/><path class="s6c_7lb9q"/><path class="z7c3p7bxa"/><path class="rgs_dyyyd"/>`,
		"fallback": "gcp:connectors",
	});
}

export default Component;
