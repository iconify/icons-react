import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/l_fw_wbak.css';
import '../../css/b/bu-ysvb6c.css';
import '../../css/i/i2fdgqbjz.css';
import '../../css/f/ffjtjibyt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="l_fw_wbak"/><path class="bu-ysvb6c"/><path class="i2fdgqbjz"/><path class="ffjtjibyt"/></g>`,
		"fallback": "icon-park:flight-safety",
	});
}

export default Component;
