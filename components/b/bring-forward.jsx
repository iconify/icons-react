import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/viij6dbqe.css';
import '../../css/q/qemtg7_xl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaNPXUb5M"><g class="v3_i3wktz"><path class="viij6dbqe"/><path class="qemtg7_xl"/></g></mask></defs><path mask="url(#SVGaNPXUb5M)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bring-forward",
	});
}

export default Component;
