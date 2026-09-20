import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/v_sktebsl.css';
import '../../css/y/yjkqsgo0c.css';
import '../../css/z/zb6qufdes.css';
import '../../css/z/zcgdsob3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="v_sktebsl"/><path class="yjkqsgo0c"/><path class="zb6qufdes"/><path class="zcgdsob3e"/></g>`,
		"fallback": "streamline-plump-color:expand-horizontal-2",
	});
}

export default Component;
