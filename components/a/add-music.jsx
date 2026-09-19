import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bqzj_jbnn.css';
import '../../css/s/s51uqybkz.css';
import '../../css/q/qmo-ysovi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlYaKVb2W"><g class="v3_i3wktz"><path class="bqzj_jbnn"/><path class="s51uqybkz"/><path class="qmo-ysovi"/></g></mask></defs><path mask="url(#SVGlYaKVb2W)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:add-music",
	});
}

export default Component;
